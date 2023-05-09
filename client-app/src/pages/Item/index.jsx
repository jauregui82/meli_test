import { useParams } from "react-router-dom";
import Layout from "src/components/Layout";
import CardDetail from "src/components/CardDetail";
import { useFetch } from "src/hooks/useFetch";

const Item = () => {
  let { id } = useParams();
  const { data } = useFetch(`items/${id}`);
  return (
    <Layout
      categories={data?.message?.categories}
      title={`${data?.message?.item?.title}`}
      image={data?.message?.item?.picture}
      type={data?.message?.categories[0]?.name}
      description={data?.message?.item?.description}
    >
      {data?.message?.item && (
        <CardDetail
          imsSrc={data?.message?.item?.picture}
          price={data?.message?.item?.price.amount}
          title={data?.message?.item?.title}
          quantity={data?.message?.item?.sold_quantity}
          newProduct={data?.message?.item?.condition}
          description={data?.message?.item?.description}
        />
      )}
    </Layout>
  );
};

export default Item;
