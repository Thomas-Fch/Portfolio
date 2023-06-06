import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "../Constants/Index";
import Github from "../assets/logos/github.png";
import Figma from "../assets/logos/figma.png";
import Live from "../assets/logos/Golive.png";
import RevealText from "../Components/RevealText";

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
          transition={{ duration: 1.75, delay: 0.75 * index }}
        >
          <figure className={project.className}>
            <img src={project.img} alt={project.name} />
            <figcaption>
              <RevealText>
                <h3>{project.name}</h3>
              </RevealText>
              <RevealText>
                <p>{project.description}</p>
              </RevealText>
              <div className="softUsedContainer">
                <p>{project.skill01}</p>
                <p>{project.skill02}</p>
              </div>
              <div className="toLink">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src={Github} alt="github logo" />
                  </a>
                ) : null}
                {project.figma ? (
                  <a href={project.figma} target="_blank" rel="noreferrer">
                    <img src={Figma} alt="figma logo" />
                  </a>
                ) : null}
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={Live} alt="figma logo" />
                  </a>
                ) : null}
              </div>
            </figcaption>
          </figure>
        </motion.div>
      ))}
    </section>
  );
}

export default Portfolio;
