import "./Footer.css";
import logo from "../../img/RTM1.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="logo" />
        <h4>Powered by Ragtop Media</h4>
        <div className="social">
          <FaFacebookSquare className="fab" />
          <FaTwitterSquare className="fab" />
          <FaInstagramSquare className="fab" />
          <FaLinkedin className="fab" />
        </div>
      </div>
    </div>
  );
}
