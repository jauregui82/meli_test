import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Seo = ({ title, image, type, description }) => {
  return (
    <Helmet>
      <title>{title ?? "Mercado Libre Chile - Envíos Gratis en el día"}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="twitter:site" content="Mercado Libre" />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
};
export default Seo;
