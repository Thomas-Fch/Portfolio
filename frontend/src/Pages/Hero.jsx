import { skillsIcons } from "../Constants/Index";
import RevealText from "../Components/RevealText";
import ProfilePicutre from "../assets/photos/photo.jpg";
import GitHub from "../assets/logos/github.png";
import MyCV from "../assets/pdf/FACHINETTI_Thomas_CV_DEV.pdf";

function Hero() {
  return (
    <section id="hero" className="wrapper">
      <div className="hero-main">
        <img src={ProfilePicutre} alt="thomas Fachinetti" className="profilePicture" />
        <div className="textSection">
          <h1>Front-End React Developper</h1>
          <RevealText>
            <p>Hi, I'm Thomas Fachinetti. A passionate gamer and developper, based in Paris, France. 📍</p>
          </RevealText>
          <div className="HeroMedia">
            <a className="downloadCV" href={MyCV} target="_blank" rel="noreferrer">
              Open C.V
            </a>
            <span>
              <a href="https://github.com/Thomas-Fch" target="_blank" rel="noreferrer">
                <img src={GitHub} alt="GitHub logo" />
              </a>
            </span>
          </div>
        </div>
        <div className="skills">
          <span>Hard Skills</span>
          <div className="logo">
            <RevealText style={{ overflow: "visible" }}>
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
