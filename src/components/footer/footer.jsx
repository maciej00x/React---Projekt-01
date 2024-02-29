import "./footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-style">
      <div className="container footer-style">
        <div className="footer-info">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2023
        </div>
        <div className="footer-logo-style">
          <span className="instagram">
            <i className="fa-brands fa-instagram">
              <FaInstagram />
            </i>
          </span>
          <span className="facebook">
            <i className="fa-brands fa-square-facebook">
              <FaFacebook />
            </i>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
