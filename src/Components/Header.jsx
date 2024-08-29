import vintedLogo from "../assets/logo-vinted.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img className="top-logo" src={vintedLogo} alt="" />
        </Link>
        <input
          className="search"
          type="search"
          placeholder="Recherche des articles"
        />
        <span>Prix entre:</span>
        <input className="range-price" type="range" />
        <span>Trier par prix:</span>
        <input type="checkbox" className="sort-price" />
        <div className="header-button-container">
          <button
            onClick={() => {
              navigate("/user/signup");
            }}
          >
            S'inscrire
          </button>
          <button
            onClick={() => {
              navigate("/user/login");
            }}
          >
            Se connecter
          </button>
        </div>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
