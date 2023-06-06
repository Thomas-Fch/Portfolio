import { useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import Mail from "../assets/logos/courriel.png";
import Linkedin from "../assets/logos/linkedin.png";
import RevealText from "../Components/RevealText";

function Contact() {
  const [textToCopy] = useState("thomas.fachinetti@gmail.com");

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setShowPopup(!showPopup);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <section id="contact" className="wrapper">
      <h2>CONTACT</h2>
      <div className="contactIcons">
        <div className="contactIcon-box">
          <figure className="roundedLogos">
            <button type="button" onClick={handleClick}>
              <img src={Mail} alt="letter" />
            </button>
          </figure>
          <div className="contactInfo">
            <RevealText>
              <h3>mail</h3>
            </RevealText>
            <button type="button" onClick={handleClick}>
              <RevealText>
                <p>{textToCopy}</p>
              </RevealText>
            </button>
            <strong style={{ opacity: showPopup ? 1 : 0 }}>COPY !</strong>
          </div>
        </div>
        <div className="contactIcon-box">
          <a href="https://www.linkedin.com/in/thomas-fachinetti/" target="_blank" rel="noreferrer">
            <figure className="roundedLogos">
              <img src={Linkedin} alt="linkedin logo" />
            </figure>
          </a>
          <div className="contactInfo">
            <RevealText>
              <h3>linkedin</h3>
            </RevealText>
            <RevealText>
              <a href="https://www.linkedin.com/in/thomas-fachinetti/" target="_blank" rel="noreferrer">
                <p>https://www.linkedin.com/in/thomas-fachinetti/</p>
              </a>
            </RevealText>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
}

export default Contact;
