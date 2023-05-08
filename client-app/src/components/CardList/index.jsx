import PropTypes from "prop-types";
import "./styles.scss";
const CardList = ({ imsSrc, price, title, category }) => {
  return (
    <div className="content-card-list">
      <div className="content-product-info">
        <div className="content-img">
          <img src={imsSrc} alt={title} />
        </div>
        <div className="content-description">
          <span className="price">{price}</span>
          <span className="title">{title}</span>
        </div>
      </div>
      <div className="content-category">
        <span className="category"> {category}</span>
      </div>
    </div>
  );
};

CardList.propTypes = {
  imsSrc: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};
export default CardList;
