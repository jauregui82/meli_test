import { useLocation } from "react-router-dom";
import { Suspense } from "react";
import Layout from "src/components/Layout";
import CardList from "src/components/CardList";
import { useFetch } from "src/hooks/useFetch";

const Items = () => {
  const location = useLocation();
  const params = new URLSearchParams(location);
  const search = params.get("search").split("=")[1];
  const { data } = useFetch(`items?q=${search}`);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout
        categories={data?.message?.categories}
        title={`${search} | MercadoLibre`}
        image={data?.message?.items[0]?.picture}
        type={data?.message?.categories[0]?.name}
        description={
          "Envíos Gratis en el día ✓ Compre Iphone en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos."
        }
      >
        {data?.message?.items.map((item) => (
          <CardList
            key={item.id}
            id={item.id}
            imsSrc={item?.picture}
            price={item?.price?.amount}
            title={item?.title}
            address={item?.address}
            freeShipping={item?.free_shipping}
          />
        ))}
      </Layout>
    </Suspense>
  );
};

export default Items;
