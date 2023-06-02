import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpeg";
import IconSearch from "../../assets/img/Search.svg";
import "../../assets/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo custom-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <div className="input-group">
                <input
                  className="form-control input-css"
                  type="text"
                  placeholder="Buscar Reporte"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary btn-css"
                    type="button"
                  >
                    <img src={IconSearch} />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className="nav-link link-css"
                style={{ paddingLeft: "15rem" }}
                to={"/"}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link-css"
                style={{ paddingLeft: "7rem" }}
                to={"/sabermas"}
              >
                Saber más
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link-css"
                style={{ paddingLeft: "7rem" }}
                to={"/nosotros"}
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
