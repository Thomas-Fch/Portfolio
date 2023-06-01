import PropTypes from "prop-types";

function Burger({ open, setOpen }) {
  return (
    <div className="menuBurger" style={open ? { right: "0%" } : { right: "-100%" }}>
      <button type="button" onClick={() => setOpen(!open)}>
        <img src="frontend\src\assets\logos\croix.png" alt="cross" className="cross" />
      </button>
      <ul className="burgerUl">
        <li>
          <a href="#hero" onClick={() => setOpen(!open)}>
            HOME
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(!open)}>
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="#project" onClick={() => setOpen(!open)}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(!open)}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}
Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
export default Burger;
