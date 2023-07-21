import React from "react";
import AboutPicutre from "../assets/photos/about_me_photo.jpg";
import AnimationCircle from "../Components/AnimationCircle";

function About() {
  return (
    <section id="about" className="wrapper">
      <div className="aboutPicture">
        <img src={AboutPicutre} alt="thomas Fachinetti" />
        <AnimationCircle />
      </div>
      <div className="textSection">
        <h2>ABOUT ME</h2>
        <p>
          I am a passionate front-end web developer with a quick learning ability for languages and tools. My background
          in the art field as a concept artist has provided me with a strong artistic vision, allowing me to bring a
          unique aesthetic touch to my projects, especially when designing mockups. My insatiable curiosity drives me to
          always want to learn more about the languages and frameworks used. Today, I am ready to put my versatility and
          skills at the service of your projects!
        </p>
      </div>
    </section>
  );
}

export default About;
