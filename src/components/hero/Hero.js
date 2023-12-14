import { Button } from "react-bootstrap";
import { Navbar } from "../navbar/Navbar";
import { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export function Hero() {
  const [word, setWord] = useState("");
  const target = "You have found your new Developer";
  let timer;

  useEffect(() => {
    generate();
  }, []);
  const generate = () => {
    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === target.length - 1) clearInterval(timer);
      setWord((prev) => prev + target[i]);
    }, 80);
  };

  return (
    <div className="hero">
      <Navbar />
      <h1 className="hero-typed">{word}</h1>
      <Link to="/work">
        <Button className="hero-button">Examples</Button>
      </Link>
    </div>
  );
}
