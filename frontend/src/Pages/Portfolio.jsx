import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "../Constants/Index";
import Github from "../assets/logos/github.png";
import Figma from "../assets/logos/figma.png";
import Live from "../assets/logos/Golive.png";

function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (!isInView) {
      mainControls.start("hidden");
    }
  });

  return (
    <section id="project" className="wrapper" ref={ref}>
      <div className="textSection">
        <h2>PROJECTS</h2>
      </div>
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          className="projectCard"
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial={mainControls}
          animate={mainControls}
          transition={{ duration: 2, delay: 1 * index }}
        >
          <figure className={project.className}>
            <img src={project.img} alt={project.name} />
            <figcaption>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="softUsedContainer">
                <p>{project.skill01}</p>
                <p>{project.skill02}</p>
              </div>
              <div className="toLink">
                <p>Code</p>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img src={Github} alt="github logo" />
                </a>
                <p>Figma</p>
                <a href={project.figma} target="_blank" rel="noreferrer">
                  <img src={Figma} alt="figma logo" />
                </a>
                <p>Live</p>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <img src={Live} alt="figma logo" />
                </a>
              </div>
            </figcaption>
          </figure>
        </motion.div>
      ))}
    </section>
  );
}

export default Portfolio;

/* <figure>
<img src="frontend\src\assets\photos\hermione.png" alt="screen capture fictionnal C.V project" />
<figcaption>
  <h3>C.V Hermione</h3>
  <p>Had to make a CV for a fictional character.You will know more about her, his skills and career </p>
  <p className="softUsed">HTML</p>
  <p className="softUsed">JS</p>
  <div className="toLink">
    <p>Code</p>
    <a href="https://github.com/Alexandre78R/CV-Hermione" target="_blank" rel="noreferrer">
      <img src="frontend\src\assets\logos\github.png" alt="github logo" />
    </a>
    <p>Figma</p>
    <a
      href="https://www.figma.com/file/Oj4Mv7yG8CeWSUVMoFh3xQ/save?type=design&node-id=0%3A1&t=cev3UVoZtELMrRiB-1"
      target="_blank"
      rel="noreferrer"
    >
      <img src="frontend\src\assets\logos\figma.png" alt="figma logo" />
    </a>
    <p>Go live</p>
    <a href="https://alexandre78r.github.io/CV-Hermione/" target="_blank" rel="noreferrer">
      <img src="frontend\src\assets\logos\Golive.png" alt="logo to live web" />
    </a>
  </div>
</figcaption>
</figure> */

/* <figure className="projectCard">
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
      </figure> */
