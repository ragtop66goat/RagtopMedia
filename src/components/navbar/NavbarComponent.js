import logo from "../../img/RTM1.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {Navbar, Container} from "react-bootstrap";
export function NavbarComponent() {
  return (
      <Container>
    <Navbar expand="sm">
        <Navbar.Brand href="/">
      <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-light"/>
      <Navbar.Collapse className="justify-content-end">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/work">Examples</Link>
            <Link to="/contact">Contact</Link>
          </div>
      </Navbar.Collapse>
    </Navbar>
      </Container>
  );
}
