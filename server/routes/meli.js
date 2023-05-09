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
const getCategories = async (dataResult) => {
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

  try {
    const { data } = await meliApi.get(`/categories/${maxCategory}`);
    const { path_from_root } = data;
    return path_from_root.find((cat) => cat.id == maxCategory);
  } catch (error) {
    res.status(200).json({ message: error.data });
    return [];
  }
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
      categories: await getCategories(results),
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
  const { id } = req.params;

  const urlSingleItem = meliApi.get(`/items/${id}`);
  const urlDescription = meliApi.get(`/items/${id}/description`);

  axios
    .all([urlSingleItem, urlDescription])
    .then(
      axios.spread((...responses) => {
        const { data } = responses[0];
        const { plain_text } = responses[1].data;

        const customItem = Object.assign({
          author: personalInfo,
          item: {
            id: data.id,
            title: data.title,
            price: {
              currency: data.currency_id,
              amount: data.price,
              decimals: 2,
            },
            picture: data.thumbnail,
            condition: data.condition,
            free_shipping: data.shipping?.free_shipping,
            sold_quantity: data.variations.find((s) =>
              s.hasOwnProperty("sold_quantity")
            )?.sold_quantity,
            description: plain_text,
          },
        });

        res.status(200).json({ message: customItem });
      })
    )
    .catch((errors) => {
      console.error(errors);
      res.status(500).json({ message: errors.data });
    });
});

module.exports = router;
