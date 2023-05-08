import "./styles.scss";
const Header = () => {
  return (
    <header>
      <div className="content-header">
        <div className="content-logo">
          <img src="src/assets/Logo_ML.png" />
        </div>
        <form className="content-search">
          <div className="content-search-input">
            <input
              className="input-field"
              placeholder="Nunca dejes de buscar"
            />
            <button className="icon" type="submit">
              z
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
