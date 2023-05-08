import PropTypes from "prop-types";
import Header from "src/components/Header";
import Breadcrumb from "src/components/Breadcrumb";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
