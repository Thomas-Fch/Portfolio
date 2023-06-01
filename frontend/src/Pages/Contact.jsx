import ScrollToTop from "../Components/ScrollToTop";
import Mail from "../assets/logos/courriel.png";
import Linkedin from "../assets/logos/linkedin.png";

function Contact() {
  return (
    <section id="contact" className="wrapper">
      <h2>CONTACT</h2>
      <div className="contactIcons">
        <div className="contactIcon-box">
          <figure className="roundedLogos">
            <img src={Mail} alt="letter" />
          </figure>
          <div className="contactInfo">
            <h3>mail</h3>
            <p>thomas.fachinetti@gmail.com</p>
          </div>
        </div>
        <div className="contactIcon-box">
          <a href="https://www.linkedin.com/in/thomas-fachinetti/" target="_blank" rel="noreferrer">
            <figure className="roundedLogos">
              <img className="pointer" src={Linkedin} alt="linkedin logo" />
            </figure>
          </a>
          <div className="contactInfo">
            <h3>linkedin</h3>
            <a href="https://www.linkedin.com/in/thomas-fachinetti/" target="_blank" rel="noreferrer">
              <p>https://www.linkedin.com/in/thomas-fachinetti/</p>
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
}

export default Contact;
