import { useState } from "react";
import Burger from "./Burger";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <h2>Thomas.Fch</h2>
      <button type="button" onClick={() => setOpen(!open)}>
        <img className="menu" src="frontend\src\assets\logos\menu.png" alt="menu_icon" />
      </button>
      <ul>
        <li>
          <a href="#hero">
            HOME
          </a>
        </li>
        <li>
          <a href="#about">
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="#project">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
      <Burger open={open} setOpen={setOpen} />
    </nav>
  );
}

export default Navbar;
