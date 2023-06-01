import { skillsIcons } from "../Constants/Index";

function Hero() {
  return (
    <section id="hero" className="wrapper">
      <div className="hero-main">
        <img src="frontend\src\assets\photos\photo.jpg" alt="thomas Fachinetti" className="profilePicture" />
        <div className="textSection">
          <h1>Front-End React Developper</h1>
          <p>Hi, I'm Thomas Fachinetti. A passionate gamer and developper, based in Paris, France. 📍</p>
          <a
            className="downloadCV"
            href="frontend\src\assets\pdf\FACHINETTI_Thomas_CV_DEV.pdf"
            target="_blank"
            rel="noreferrer"
          >
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
