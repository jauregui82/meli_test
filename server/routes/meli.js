const express = require("express");
const axios = require("axios");
const qs = require("qs");

const personalInfo = {
  name: "Jauregui",
  lastname: "Crespo",
};

const router = express.Router();

const meliApi = axios.create({
  baseURL: "https://api.mercadolibre.com",
  params: {
    author: personalInfo,
  },
  paramsSerializer: (params) => qs.stringify(params, { encode: false }),
});

const getCategories = async (categoryId) => {
  try {
    const { data } = await meliApi.get(`/categories/${categoryId}`);
    const { path_from_root } = data;
    return path_from_root;
  } catch (error) {
    res.status(200).json({ message: error.data });
    return [];
  }
};

const handlerCategories = async (dataResult) => {
  let groupCategory = dataResult.reduce(
    (acc, { category_id }) => ({
      ...acc,
      [category_id]: acc[category_id] ?? 0 + 1,
    }),
    {}
  );
  const maxOcurrences = Math.max(...Object.values(groupCategory));
  const maxCategory = Object.entries(groupCategory).find(
    ([category, ocurrences]) => ocurrences === maxOcurrences
  )[0];

  return getCategories(maxCategory);
};

router.get("/", async (req, res) => {
  const { q } = req.query || ":query";
  try {
    const { data } = await meliApi.get("/sites/MLA/search", {
      params: { q: q, limit: 4 },
    });
    const { available_filters, results } = data;
    const customItems = {
      author: personalInfo,
      categories: await handlerCategories(results),
      items: results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 2,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping?.free_shipping,
          address: item.address.state_name,
        };
      }),
    };
    res.status(200).json({ message: customItems });
  } catch (error) {
    res.status(200).json({ message: error.data });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [singleItemResponse, descriptionResponse] = await Promise.all([
      meliApi.get(`/items/${id}`, {
        params: {
          author: personalInfo,
        },
      }),
      meliApi.get(`/items/${id}/description`, {
        params: {
          author: personalInfo,
        },
      }),
    ]);

    const { data: singleItemData } = singleItemResponse;
    const { plain_text } = descriptionResponse.data;

    const categories = await getCategories(singleItemData.category_id);

    const customItem = {
      author: personalInfo,
      categories: categories ?? null,
      item: {
        id: singleItemData.id,
        title: singleItemData.title,
        price: {
          currency: singleItemData.currency_id,
          amount: singleItemData.price,
          decimals: 2,
        },
        picture: singleItemData.thumbnail,
        condition: singleItemData.condition,
        free_shipping: singleItemData.shipping?.free_shipping,
        sold_quantity: singleItemData.variations.find((s) =>
          s.hasOwnProperty("sold_quantity")
        )?.sold_quantity,
        description: plain_text,
      },
    };

    res.status(200).json({ message: customItem });
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data) {
      res.status(500).json({ message: error.response.data });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

module.exports = router;
