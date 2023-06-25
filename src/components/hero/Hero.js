import { Button } from "react-bootstrap";
import { Navbar } from "../navbar/Navbar";
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <h1 className="m-5">You have found your next </h1>
      <Button className="button">View Examples</Button>
    </div>
  );
}
