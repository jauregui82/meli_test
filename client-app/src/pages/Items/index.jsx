import Header from "src/components/Header";
import CardList from "src/components/CardList";

const Items = () => {
  return (
    <>
      <Header />
      <main>
        <CardList
          imsSrc="https://http2.mlstatic.com/D_606405-MLA46400306153_062021-I.jpg"
          price="$ 1.980"
          title="Apple iPhone 11 (128 Gb) - Negro"
          category="categoria"
        />
      </main>
    </>
  );
};

export default Items;
