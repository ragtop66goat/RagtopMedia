import logo from "../../img/RTM1.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
export function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav">
        <div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/work">Examples</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
