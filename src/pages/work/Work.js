import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import ShyGuy from "../../img/ShyguyRS.jpg";
import UncleBigBucks from "../../img/UnclebigbucksRS.jpg";
import SGAuto from "../../img/AutosBySGRS.jpg";
import RTM from "../../img/RTM2.png";
import "./Work.css";

export default function Work() {
  return (
    <div className="work">
      <Header content="Examples" />
      <div className="example-content">
        <div className="example-card">
          <img src={UncleBigBucks} alt="Screenshot of the Uncle Big Bucks website homepage" />

          <p>
            This website was built to meet all client requirements with React JS
            and CSS, with a beautiful pallet of fall/autumn colors.
          </p>
          <a
            className="link"
            href="https://uncle-big-bucks.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site!
          </a>
          <a
            className="link"
            href="https://github.com/ragtop66goat/big-bucks.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review the code
          </a>
        </div>
        <div className="example-card">
          <img src={SGAuto} alt="Screenshot of the Autos by SG website homepage" />
          <p>
            This website built to showcase select vehicle inventory with HTML
            and CSS. A great small family owned business since 1966 in Cleveland
            OH.{" "}
          </p>
          <a
            className="link"
            href="https://autosbysg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site
          </a>
          <a
            className="link"
            href="https://github.com/ragtop66goat/autosbysg-website.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review the code
          </a>
        </div>
        <div className="example-card">
          <img src={ShyGuy} alt="Screenshot of the ShyGuyThe13th vlog gallery website" />
          <p>
            Website built to meet all client requirements using HTML, CSS, and
            JavaScript. This is a YouTube vlog Gallery that links the clients
            YouTube videos.{" "}
          </p>
          <a
            className="link"
            href="https://shyguythe13th.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site!
          </a>
          <a
            className="link"
            href="https://github.com/ragtop66goat/shyguythe13th.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review the code
          </a>
        </div>
        <div className="example-card">
          <img src={RTM} alt="Screenshot of the Ragtop Media website homepage" />
          <p>
            This site was built with React, Bootstrap, JavaScript and CSS.
          </p>
          <a
            className="link"
            href="https://github.com/ragtop66goat/RagtopMedia.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review the code
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
