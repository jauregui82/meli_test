import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";
const CardList = ({ imsSrc, price, title, address, id, freeShipping }) => {
  return (
    <div className="content-card-list">
      <div className="content-product-info">
        <div className="content-img">
          <Link className="" to={`/items/${id}`}>
            <img src={imsSrc} alt={title} />
          </Link>
        </div>
        <div className="content-description">
          <Link className="price" to={`/items/${id}`}>
            <span className={`price ${freeShipping && "free-shipping"}`}>
              $ {price}
            </span>
          </Link>
          <Link className="title" to={`/items/${id}`}>
            <span className="title">{title}</span>
          </Link>
        </div>
      </div>
      <div className="content-address">
        <span className="address"> {address}</span>
      </div>
    </div>
  );
};

CardList.propTypes = {
  id: PropTypes.string,
  imsSrc: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  address: PropTypes.string,
  freeShipping: PropTypes.bool,
};
export default CardList;
