import "./Footer.css";
import logo from "../../img/RTM1.png";
import { SocialLinks } from "../social/SocialLinks";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="logo" />
        <h4>Powered by Ragtop Media</h4>
        <div className="social">
          <SocialLinks iconClassName="fab" />
        </div>
      </div>
    </div>
  );
}
