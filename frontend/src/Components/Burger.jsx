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
          <li >HOME</li>
          <li >ABOUT ME</li>
          <li >PROJECTS</li>
          <li onClick={() => navigate("<Contact />")}>CONTACT</li>
          {/* <li onClick={() => navigate("/mentions")}>MENTIONS LEGALES</li> */}
        </ul>
      </div>
    );
  }
  export default Burger;