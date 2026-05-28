import "../css/Footer.css";
import logo from "../assets/Aurora.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
            <img
  src={logo}
  alt="Aurora Spa Logo"
  className="footer-logo"
/>
          <h2>Aurora Spa</h2>
          <p>
            Where relaxation begins.
            Experience luxury wellness
            and premium self-care.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Riverside Drive, Nairobi</p>
          <p>+254 700 000 000</p>
          <p>info@auroraspa.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Aurora Spa. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;