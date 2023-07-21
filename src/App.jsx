import "./Sass/style.scss";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
