import { Button } from "react-bootstrap";
import { Navbar } from "../navbar/Navbar";
import { Type } from "../../utils";
import "./Hero.css";
import { useEffect, useState } from "react";

export function Hero() {
  const [word, setWord] = useState("");
  useEffect(() => {
    setWord(Type());
  }, []);

  return (
    <div className="hero">
      <Navbar />
      <h1 className="m-5">You have found your next {word}</h1>
      <Button className="button">Examples</Button>
    </div>
  );
}
