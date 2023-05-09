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
      <Layout valueSearch={search} categories={data?.message.categories}>
        {data?.message?.items.map((item) => (
          <CardList
            key={item.id}
            id={item.id}
            imsSrc={item?.picture}
            price={item?.price.amount}
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
