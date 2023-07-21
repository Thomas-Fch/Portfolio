import PropTypes from "prop-types";
import Cross from "../assets/logos/croix.png";

function Burger({ open, setOpen }) {
  return (
    <div className="menuBurger" style={{ right: open ? "0%" : "-100%" }}>
      <button type="button" onClick={() => setOpen(!open)}>
        <img src={Cross} alt="cross" className="cross" />
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
