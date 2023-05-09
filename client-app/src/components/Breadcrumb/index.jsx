import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";
const Breadcrumb = ({ categories }) => {
  return (
    <section className="content-breadcrumb">
      <ul className="breadcrumb-ul">
        {categories?.map((item, index) => (
          <li className="breadcrumb-li" key={index}>
            <Link className="breadcrumb-link" to={"#"}>
              <span className="text">{item.name}</span>
              {console.log({ item })}
              {categories.length - 1 !== index && (
                <span className="chevron">{">"}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
Breadcrumb.propTypes = {
  categories: PropTypes.array,
};
export default Breadcrumb;
