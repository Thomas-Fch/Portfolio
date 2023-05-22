import ScrollToTop from "../Components/ScrollToTop";
function Contact() {
  return (
    <div className="wrapper" id="white">
      <div id="contact" className="textSection">
        <h2>CONTACT</h2>
        <figure>
          <img src="frontend\src\assets\logos\courriel.png" alt="letter" />
        </figure>
        <h3>mail</h3>
        <p>thomas.fachinetti@gmail.com</p>
        <figure>
          <img id="pointer" src="frontend\src\assets\logos\linkedin.png" alt="linkedin logo" onClick={() => window.open("https://www.linkedin.com/in/thomas-fachinetti/")}/>
        </figure>
        <h3>linkedin</h3>
        <p id="pointer" onClick={() => window.open("https://www.linkedin.com/in/thomas-fachinetti/")}>https://www.linkedin.com/in/thomas-fachinetti/</p>
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default Contact;
