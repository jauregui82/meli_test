import PropTypes from "prop-types";
import Header from "src/components/Header";
import Breadcrumb from "src/components/Breadcrumb";
import Seo from "src/components/Seo";

const Layout = ({ children, categories, title, image, type, description }) => {
  return (
    <>
      <Seo title={title} image={image} type={type} description={description} />
      <Header />
      <main>
        <Breadcrumb categories={categories} />
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
  title: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
};
export default Layout;
