import logo from "../../assets/img/logo-transparent.png";
import IconGmail from "../../../public/icons/GmailIcon.svg";
import IconLIN from "../../../public/icons/LinkedIn.svg";
import IconFB from "../../../public/icons/Facebook.svg";
import IconIG from "../../../public/icons/Instagram.svg";
import "../../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="container-footer">
      <div className="row-footer">
        <div className="column-footer">
          <img src={logo} alt="Logo" className="logo-footer" />
        </div>
        <div className="column-footer caption">
          <h2>World clean TX</h2>
          {/* <span>Proyecto Hackathon 2023</span> */}
        </div>

        <div className="column-footer social-container">
          <h4>Nuestras redes sociales</h4>
          <div>
            <a
              href="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconGmail} alt="Logo gmail" />
            </a>
            <a
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconFB} alt="Logo facebook" />
            </a>
            <a
              href="https://www.instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconLIN} alt="Logo Linkedin" />
            </a>
            <a
              href="https://www.linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={IconIG} alt="Logo Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
