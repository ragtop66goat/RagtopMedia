import logo from "../../img/RTM1.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {Navbar, Container} from "react-bootstrap";
export function NavbarComponent() {
  return (
      <Container fluid className="page-container">
    <Navbar expand="sm">
        <Navbar.Brand href="/">
      <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-light"/>
      <Navbar.Collapse className="justify-content-end">
          <div className="nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "current" : undefined)}>Home</NavLink>
            <NavLink to="/work" className={({ isActive }) => (isActive ? "current" : undefined)}>Examples</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "current" : undefined)}>Contact</NavLink>
          </div>
      </Navbar.Collapse>
    </Navbar>
      </Container>
  );
}
