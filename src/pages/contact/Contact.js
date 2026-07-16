import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { SocialLinks } from "../../components/social/SocialLinks";
import { Reveal } from "../../components/reveal/Reveal";
import "./Contact.css";
import EmailForm from "../../components/email form/EmailForm";

export default function Contact() {
  return (
    <div className="text-center">
      <Header content="Contact"/>
      <Reveal>
        <div className="contact-content">
          <EmailForm/>
          <div className="contact-social">
            <SocialLinks iconClassName="contact-fab" />
          </div>
          <h2 className="section-title">Thanks for Visiting</h2>
          <div className="bottom-line"></div>
          <h3 className="closing-line">I look forward to beginning our collaboration!</h3>
        </div>
      </Reveal>
      <Footer />
    </div>
  );
}
