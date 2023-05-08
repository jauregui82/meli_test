import { Link } from "react-router-dom";
import "./styles.scss";
const Breadcrumb = () => {
  return (
    <section className="content-breadcrumb">
      <ul className="breadcrumb-ul">
        <li className="breadcrumb-li">
          <Link className="breadcrumb-link first-link" to={"/items"}>
            <span className="text">Volver al listado</span>
            <span className="separator">|</span>
          </Link>
          <Link className="breadcrumb-link" to={"/items"}>
            Computacion
            <span className="chevron">{">"}</span>
          </Link>
          <Link className="breadcrumb-link" to={"/items"}>
            {"Lorem"}
            <span className="chevron">{">"}</span>
          </Link>
          <Link className="breadcrumb-link" to={"/items"}>
            {"Lorem"}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Breadcrumb;
