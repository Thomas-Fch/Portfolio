function Hero() {
  return (
    <div className="wrapper" id="hero">
      <img src="frontend\src\assets\photos\photo.jpg" alt="thomas Fachinetti" className="profilePicture" />
      <div className="textSection">
        <h1>Front-End React Developper</h1>
        <p>Hi, I'm Thomas Fachinetti. A passionate gamer and developper, based in Paris, France. 📍</p>
        <div className="myProfil">
          <a className="downloadCV" href="frontend\src\assets\pdf\FACHINETTI_Thomas_CV_DEV.pdf" download>
            Download C.V
          </a>
          <a href="https://github.com/Thomas-Fch" target="_blank" rel="noreferrer">
            <img src="frontend\src\assets\logos\github.png" alt="GitHub logo" className="myGitHub" />
          </a>
        </div>
        <span>Hard Skills</span>
        <div className="skills">
          <figure>
            <img src="frontend\src\assets\logos\HTML.png" alt="html logo" />
            {/* <figcaption>HTML</figcaption> */}
          </figure>
          <figure>
            <img src="frontend\src\assets\logos\css.png" alt="css logo" />
            {/* <figcaption>
CSS
    </figcaption> */}
          </figure>
          <figure>
            <img src="frontend\src\assets\logos\JavaScript.png" alt="javaScript logo" />
            {/* <figcaption>
JS
    </figcaption> */}
          </figure>
          <figure>
            <img src="frontend\src\assets\logos\React.png" alt="react logo" />
            {/* <figcaption>
REACT
    </figcaption> */}
          </figure>
          <figure>
            <img src="frontend\src\assets\logos\scss.png" alt="sass logo" />
            {/* <figcaption>
SCSS
    </figcaption> */}
          </figure>
          <figure>
            <img src="frontend\src\assets\logos\sql.png" alt="mysql logo" />
            {/* <figcaption>
MYSQL
    </figcaption> */}
          </figure>
          <figure>
            <img src="frontend\src\assets\logos\photoshop.png" alt="photoshop logo" />
            {/* <figcaption>
PS
</figcaption> */}
          </figure>
          <figure>
            <img src="frontend\src\assets\logos\figma.png" alt="figma logo" />
            {/* <figcaption>
FIGMA
</figcaption> */}
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Hero;
