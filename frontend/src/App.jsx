import "./App.scss";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Pages/Hero.jsx";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Portfolio/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
