import "./Header.css";
import { Navbar } from "../navbar/Navbar";

export function Header({ content }) {
  return (
    <div className="header">
      <Navbar />
      <h1>{content}</h1>
    </div>
  );
}
