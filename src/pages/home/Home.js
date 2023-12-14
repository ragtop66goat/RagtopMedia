import { Footer } from "../../components/footer/Footer";
import { Hero } from "../../components/hero/Hero";
import { FaFileAlt } from "react-icons/fa";
import { FaObjectUngroup } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import "./Home.css";

export function Home() {
  return (
    <div>
      <Hero />
      <div className="home-content">
        <h2 className="section-title">Concentration</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Building a custom solution to fit your desired web-presence <br />
          using industry standard technologies
        </p>
      </div>
      <div className="process-section">
        <h2 className="section-title">The Process</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          All projects are based off collaboration and feedback
          <br />
          to ensure the delivered product meets client expectations
        </p>
        <div className="process">
          <div>
            <FaFileAlt class="process-icon" />
            <h3>Discussion</h3>
            <p className="detail">
              Let's talk about both immediate and future needs, establishing the
              ideal roadmap for your site.
            </p>
          </div>
          <div>
            <FaObjectUngroup class="process-icon" />
            <h3>Brainstorming</h3>
            <p className="detail">
              Together we go over names, colors, and any logo design needs that
              your company may have, along with any design tricks to make your
              site stand out.
            </p>
          </div>
          <div>
            <FaDesktop class="process-icon" />
            <h3>User Experience</h3>
            <p className="detail">
              Now we can fine tune the site layout and critical elemnts for each
              page, incorporating any third party communications and
              interactions where needed.
            </p>
          </div>
          <div>
            <FaThumbsUp class="process-icon" />
            <h3>Interaction</h3>
            <p className="detail">
              This is where we go over the site together until it's fully ready
              for deployment, but it's not the end of the road. As your business
              expands, so will your needs, and we will update your site
              accordingly.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
