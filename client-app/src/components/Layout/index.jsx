import PropTypes from "prop-types";
import Header from "src/components/Header";
import Breadcrumb from "src/components/Breadcrumb";

const Layout = ({ children, categories }) => {
  return (
    <>
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
};
export default Layout;
