import "./Header.css";
import { NavbarComponent } from "../navbar/NavbarComponent";

export function Header({ content }) {
  return (
    <div className="header">
      <NavbarComponent />
      <h1 className="header-content">{content}</h1>
    </div>
  );
}
