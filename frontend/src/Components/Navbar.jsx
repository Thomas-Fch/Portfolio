import { useState } from "react";
import Burger from "./Burger";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Thomas.Fch</h2>
      <button type="button" onClick={() => setOpen(!open)}>
        <img className="menu" src="frontend\src\assets\logos\menu.png" alt="menu_icon" />
      </button>
      <Burger open={open} setOpen={setOpen} />
    </nav>
  );
}

export default Navbar;
