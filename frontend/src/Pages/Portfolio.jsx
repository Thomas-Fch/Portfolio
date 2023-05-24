function Portfolio() {
  return (
    <div className="wrapper" id="portfolio">
      <div className="textSection">
        <h2>PORTFOLIO</h2>
      </div>
      <figure className="projectCard">
        <img src="frontend\src\assets\photos\pokemonLite.png" alt="screen capture pokemon project" />
        <figcaption>
          <h3>PokemonLite</h3>
          <p>A Pokemon web site that allows users to experiment an easier journey in Pokemon with automatize battle.</p>
        </figcaption>
        <p className="softUsed">React</p>
        <p className="softUsed">SCSS</p>
        <div className="toLink">
          <p>Code</p>
          <img src="frontend\src\assets\logos\github.png" alt="github logo" />
          <p>Figma</p>
          <img src="frontend\src\assets\logos\figma.png" alt="figma logo" />
          <p>Go live</p>
          <img src="frontend\src\assets\logos\Golive.png" alt="logo to live web" />
        </div>
      </figure>
      <figure className="projectCard">
        <img src="frontend\src\assets\photos\hermione.png" alt="screen capture fictionnal C.V project" />
        <figcaption>
          <h3>C.V Hermione</h3>
          <p>Had to make a CV for a fictional character.You will know more about her, his skills and career </p>
        </figcaption>
        <p className="softUsed">HTML</p>
        <p className="softUsed">JS</p>
        <div className="toLink">
          <p>Code</p>
          <img src="frontend\src\assets\logos\github.png" alt="github logo" />
          <p>Figma</p>
          <img src="frontend\src\assets\logos\figma.png" alt="figma logo" />
          <p>Go live</p>
          <img src="frontend\src\assets\logos\Golive.png" alt="logo to live web" />
        </div>
      </figure>
    </div>
  );
}

export default Portfolio;
