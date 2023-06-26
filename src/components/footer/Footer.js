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
          <a
            href="https://www.facebook.com/Ragtop-Media-112531074552903"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="fab" />
          </a>
          <a
            href="https://www.twitter.com/_R_T_Media"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare className="fab" />
          </a>
          <a
            href="https://www.instagram.com/ragtopmedia"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="fab" />
          </a>
          <a
            href="https://www.linkedin.com/in/jason-gionfriddo-1a660048"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="fab" />
          </a>
        </div>
      </div>
    </div>
  );
}
