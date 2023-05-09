import PropTypes from "prop-types";
import "./styles.scss";
const CardDetail = ({
  imsSrc,
  price,
  title,
  category,
  description,
  newProduct,
}) => {
  return (
    <div className="content-card-detail">
      <div className="content-product">
        <div className="content-product-img">
          <img src={imsSrc} alt={title} />
        </div>
        <div className="content-product-price">
          <span className="product-type">{`${
            newProduct ? "Nuevo" : "Usado"
          }  |  ${category}`}</span>
          <span className="product-title">{title}</span>
          <div className="content-price">
            <span className="product-price">$ {price}</span>
            <span className="product-price-decimals">00</span>
          </div>
          <button className="product-btn-buy">Comprar</button>
        </div>
      </div>
      <div className="content-description">
        <h2 className="description-title">Descripción del producto</h2>
        <span className="description-text">{description}</span>
      </div>
    </div>
  );
};

CardDetail.propTypes = {
  imsSrc: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  newProduct: PropTypes.bool,
};
export default CardDetail;
