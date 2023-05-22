import Contact from "../Pages/Contact";
function Burger({ open, setOpen }) {
    return (
      <div
        className="menuBurger"
        style={open ? { right: "0%" } : { right: "-100%" }}
      >
        <img
          src="frontend\src\assets\logos\croix.png"
          alt="cross"
          className="cross"
          onClick={() => setOpen(!open)}
        />
        <ul className="burgerUl">
          <li ><a href="#hero" onClick={() => setOpen(!open)}>HOME</a></li>
          <li ><a href="#about" onClick={() => setOpen(!open)}>ABOUT ME</a></li>
          <li ><a href="#project" onClick={() => setOpen(!open)}>PROJECTS</a></li>
          <li ><a href="#contact" onClick={() => setOpen(!open)}>CONTACT</a></li>
        </ul>
      </div>
    );
  }
  export default Burger;