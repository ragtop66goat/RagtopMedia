import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Contact.css";

export function Contact() {
  return (
    <div className="text-center">
      <Header content="Contact" />
      <h3>
        Message me on any of the platforms below for pricing and availability
      </h3>
      <div className="contact-social">
        <a
          href="https://www.facebook.com/Ragtop-Media-112531074552903"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="contact-fab" />
        </a>
        <a
          href="https://www.twitter.com/_R_T_Media"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare className="contact-fab" />
        </a>
        <a
          href="https://www.instagram.com/ragtopmedia"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare className="contact-fab" />
        </a>
        <a
          href="https://www.linkedin.com/in/jason-gionfriddo-1a660048"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="contact-fab" />
        </a>
      </div>
      <h2 className="section-title">Thanks for Visiting</h2>
      <div className="bottom-line"></div>
      <h3>I look forward to beginning our collaboration!</h3>
      <Footer />
    </div>
  );
}
