import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import ShyGuy from "../../img/ShyguyRS.jpg";
import UncleBigBucks from "../../img/UnclebigbucksRS.jpg";
import SGAuto from "../../img/AutosBySGRS.jpg";
import RTM from "../../img/RTM2.png";
import "./Work.css";

export function Work() {
  return (
    <div className="work">
      <Header content="Examples" />
      <div className="example-content">
        <div className="example-card">
          <img src={UncleBigBucks} alt="UncleBigBucks" />
          <a
            href="https://fabulous-pony-af103f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site!
          </a>
          <p>
            This website was built to meet all client requirements with React JS
            and CSS, with a beautiful pallet of fall/autumn colors.
          </p>
          <a
            href="https://github.com/ragtop66goat/big-bucks.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review the code
          </a>
        </div>
        <div className="example-card">
          <img src={SGAuto} alt="SGAuto" />
          <a
            href="https://autosbysg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site
          </a>
          <p>
            This website built to showcase select vehicle inventory with HTML
            and CSS. A great small family owned business since 1966 in Cleveland
            OH.{" "}
          </p>
          <a
            href="https://github.com/ragtop66goat/autosbysg-website.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review the code
          </a>
        </div>
        <div className="example-card">
          <img src={ShyGuy} alt="ShyGuy" />
          <a
            href="https://shyguythe13th.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site!
          </a>
          <p>
            Website built to meet all client requirements using HTML, CSS, and
            JavaScript. This is a YouTube vlog Gallery that links the clients
            YouTube videos.{" "}
          </p>
          <a
            href="https://github.com/ragtop66goat/shyguythe13th.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review the code
          </a>
        </div>
        <div className="example-card">
          <img src={RTM} alt="RTM" />
          <a href="https://ragtopmedia.com">Ragtopmedia.com</a>
          <p>
            My portfolio page was built with HTML, CSS, JavaScript, and SASS. I
            have many more tips and tricks that we can incorporate into your
            site.
          </p>
          <a
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
