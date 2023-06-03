import { skillsIcons } from "../Constants/Index";
import RevealText from "../Constants/RevealText";
import ProfilePicutre from "../assets/photos/photo.jpg";
import MyCV from "../assets/pdf/FACHINETTI_Thomas_CV_DEV.pdf";

function Hero() {
  return (
    <section id="hero" className="wrapper">
      <div className="hero-main">
        <img src={ProfilePicutre} alt="thomas Fachinetti" className="profilePicture" />
        <div className="textSection">
          {/* <RevealText> */}
          <h1>Front-End React Developper</h1>
          {/* </RevealText> */}
          <RevealText>
            <p>Hi, I'm Thomas Fachinetti. A passionate gamer and developper, based in Paris, France. 📍</p>
          </RevealText>
          <a className="downloadCV" href={MyCV} target="_blank" rel="noreferrer">
            Open C.V
          </a>

          {/* <span>
            <a href="https://github.com/Thomas-Fch" target="_blank" rel="noreferrer">
            <img src="frontend\src\assets\logos\github.png" alt="GitHub logo" />
            </a>
          </span> */}
        </div>
        <div className="skills">
          <span>Hard Skills</span>
          <div className="logo">
            <RevealText>
              <ul>
                {skillsIcons.map((icon) => (
                  <li key={icon.name}>
                    <figure className="roundedLogos">
                      <img src={icon.img} alt={icon.name} />
                    </figure>
                    <p>{icon.name}</p>
                  </li>
                ))}
              </ul>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
