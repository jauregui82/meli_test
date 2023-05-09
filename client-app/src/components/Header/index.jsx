import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "./styles.scss";

const Header = () => {
  const location = useLocation();
  const params = new URLSearchParams(location);
  const search = params.get("search").split("=")[1];

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const searchData = (e) => {
    e.preventDefault();
    if (searchInput) {
      navigate(`/items?search=${searchInput}`);
    }
  };

  useEffect(() => {
    if (search) {
      setSearchInput(search);
    }
  }, [search]);
  return (
    <header>
      <div className="content-header">
        <div className="content-logo">
          <Link className="price" to={`/`}>
            <img src="/Logo_ML.png" />
          </Link>
        </div>
        <form className="content-search" onSubmit={searchData}>
          <div className="content-search-input">
            <input
              className="input-field"
              placeholder="Nunca dejes de buscar"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="icon" type="submit" onClick={searchData}>
              <img src="/ic_Search.png" alt="search icon" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
