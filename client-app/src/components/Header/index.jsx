import "./styles.scss";
const Header = () => {
  return (
    <header>
      <div className="content-header">
        <div className="content-logo">
          <img src="/Logo_ML.png" />
        </div>
        <form className="content-search">
          <div className="content-search-input">
            <input
              className="input-field"
              placeholder="Nunca dejes de buscar"
            />
            <button className="icon" type="submit">
              <img src="/ic_Search.png" alt="search icon" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
