import { Footer } from "../../components/footer/Footer";
import { Hero } from "../../components/hero/Hero";
import { Reveal } from "../../components/reveal/Reveal";
import { FaFileAlt } from "react-icons/fa";
import { FaObjectUngroup } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaJava, FaUniversalAccess } from "react-icons/fa";
import {
  SiReact,
  SiAngularjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSpring,
  SiSpringboot,
  SiPostgresql,
  SiJenkins,
  SiGithubactions,
  SiPostman,
  SiSwagger,
  SiSplunk,
} from "react-icons/si";
import "./Home.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { Icon: SiReact, label: "React" },
      { Icon: SiAngularjs, label: "AngularJS" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiHtml5, label: "HTML" },
      { Icon: SiCss3, label: "CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { Icon: FaJava, label: "Java" },
      { Icon: SiSpring, label: "Spring" },
      { Icon: SiSpringboot, label: "Spring Boot" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: [
      { Icon: SiJenkins, label: "Jenkins" },
      { Icon: SiGithubactions, label: "GitHub Actions" },
      { Icon: SiPostman, label: "Postman" },
      { Icon: SiSwagger, label: "Swagger" },
      { Icon: SiSplunk, label: "Splunk" },
    ],
  },
  {
    title: "Practices",
    skills: [{ Icon: FaUniversalAccess, label: "508 Compliance" }],
  },
];

const processSteps = [
  {
    title: "Discussion",
    Icon: FaFileAlt,
    detail:
      "Let's talk about both immediate and future needs, establishing the ideal roadmap for your site.",
  },
  {
    title: "Brainstorming",
    Icon: FaObjectUngroup,
    detail:
      "Together we go over names, colors, and any logo design needs that your company may have, along with any design tricks to make your site stand out.",
  },
  {
    title: "User Experience",
    Icon: FaDesktop,
    detail:
      "Now we can fine tune the site layout and critical elemnts for each page, incorporating any third party communications and interactions where needed.",
  },
  {
    title: "Interaction",
    Icon: FaThumbsUp,
    detail:
      "This is where we go over the site together until it's fully ready for deployment, but it's not the end of the road. As your business expands, so will your needs, and we will update your site accordingly.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="skills-section">
        <Reveal>
          <h2 className="section-title">Tech Stack</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            A snapshot of the languages, frameworks, and tools I work with day to
            day.
          </p>
        </Reveal>
        <div className="skills-groups">
          {skillGroups.map((group, i) => (
            <Reveal delay={i * 90} key={group.title}>
              <div className="skills-group">
                <h3 className="skills-group-title">{group.title}</h3>
                <div className="skills-grid">
                  {group.skills.map(({ Icon, label }) => (
                    <span className="skill-chip" key={label}>
                      <Icon />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="process-section">
        <Reveal>
          <h2 className="section-title">The Process</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            All projects are based off collaboration and feedback
            <br />
            to ensure the delivered product meets client expectations
          </p>
        </Reveal>
        <div className="process">
          {processSteps.map(({ title, Icon, detail }, i) => (
            <Reveal delay={i * 90} key={title}>
              <div className="process-item">
                <Icon className="process-icon" />
                <h3>{title}</h3>
                <p className="detail">{detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
