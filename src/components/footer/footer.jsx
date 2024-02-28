import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-style">
      <div className="container footer-style">
        <div className="footer-info">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2023
        </div>
        <div className="footer-logo-style">
          <i className="icon fab fa-instagram"></i>
          <i className="icon fab fa-facebook-square"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
