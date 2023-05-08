import Header from "src/components/Header";
import Breadcrumb from "src/components/Breadcrumb";
import CardDetail from "src/components/CardDetail";

const Item = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        <CardDetail
          imsSrc="https://http2.mlstatic.com/D_606405-MLA46400306153_062021-I.jpg"
          price="1.980"
          title="Apple iPhone 11 (128 Gb) - Negro"
          category="categoria"
          newProduct={true}
        />
      </main>
    </>
  );
};

export default Item;
