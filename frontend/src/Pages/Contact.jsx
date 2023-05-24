import ScrollToTop from "../Components/ScrollToTop";

function Contact() {
  return (
    <div className="wrapper" id="contact">
      <div id="contact" className="textSection">
        <h2>CONTACT</h2>
        <figure>
          <img src="frontend\src\assets\logos\courriel.png" alt="letter" />
        </figure>
        <h3>mail</h3>
        <p>thomas.fachinetti@gmail.com</p>
        <figure>
          <a href="https://www.linkedin.com/in/thomas-fachinetti/" target="_blank" rel="noreferrer">
            <img className="pointer" src="frontend\src\assets\logos\linkedin.png" alt="linkedin logo" />
          </a>
        </figure>
        <h3>linkedin</h3>
        <a href="https://www.linkedin.com/in/thomas-fachinetti/" target="_blank" rel="noreferrer">
          <p>https://www.linkedin.com/in/thomas-fachinetti/</p>
        </a>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Contact;
