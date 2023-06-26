import "./Header.css";
import { Navbar } from "../navbar/Navbar";

export function Header({ content }) {
  return (
    <div className="header">
      <Navbar />
      <h1 className="header-content">{content}</h1>
    </div>
  );
}
