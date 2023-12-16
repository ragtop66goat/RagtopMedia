import { NavbarComponent } from "../navbar/NavbarComponent";
import { useEffect, useState } from "react";
import "./Hero.css";

export function Hero() {
  const [word, setWord] = useState("");
  const target = "You have found your new Developer";

  useEffect(() => {

    generate();
    // eslint-disable-next-line
  }, []);

  const generate = () => {
    let timer;
    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === target.length - 1) clearInterval(timer);
      setWord((prev) => prev + target[i]);
    }, 80);
  };

  return (
    <div className="hero">
      <NavbarComponent />
      <h1 className="hero-typed">{word}</h1>
      <Link to="/work">
        <Button className="hero-button">Examples</Button>
      </Link>
    </div>
  );
}
