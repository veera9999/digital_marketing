import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "../style/Footer.css";

function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="pro-footer fade-in">
        <div className="footer-container">
          {/* Branding */}
          <div className="footer-col">
            <div className="footer-logo-row">
              <img
                src="/redchilli.jpg"
                alt="RedChil Logo"
                className="footer-logo-img"
              />
              <h2 className="footer-brand-name">RedChil</h2>
            </div>
            <p className="footer-address">
              999 Hot Pepper Blvd
              <br />
              Atlanta, GA 30303
            </p>
            <p className="footer-contact">
              <FaPhone className="footer-icon" /> (123) 456-7890
            </p>
            <p className="footer-contact">
              <FaEnvelope className="footer-icon" /> info@redchil.io
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3 className="footer-title">Our Services</h3>
            <ul>
              <li>Web Design</li>
              <li>SEO & Paid Ads</li>
              <li>Marketing Automation</li>
              <li>Brand Strategy</li>
            </ul>
          </div>

          {/* Quick Links + Social */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
            <div className="footer-socials">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h3 className="footer-title">Subscribe</h3>
            <p className="newsletter-text">
              Get marketing tips & fresh ideas delivered to your inbox.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} RedChil. All copyrights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
