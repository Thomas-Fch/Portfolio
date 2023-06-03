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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel felis ac lectus volutpat interdum.
          Suspendisse pretium, erat ut pretium tristique, arcu eros euismod nulla, sit amet efficitur purus leo ac
          lorem. Nam non erat quis mi rutrum mattis. Suspendisse pretium, erat ut pretium tristique, arcu eros euismod
          nulla, sit amet efficitur purus leo ac lorem.
        </p>
      </div>
    </section>
  );
}

export default About;
