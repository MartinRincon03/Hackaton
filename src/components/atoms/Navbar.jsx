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

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <div class="input-group">
                <input
                  class="form-control input-css"
                  type="text"
                  placeholder="Buscar Reporte"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary btn-css"
                    type="button"
                  >
                    <img src={IconSearch} />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link
                class="nav-link link-css"
                style={{ paddingLeft: "15rem" }}
                to={"/"}
              >
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link link-css"
                style={{ paddingLeft: "7rem" }}
                to={"/sabermas"}
              >
                Saber más
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link link-css"
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
