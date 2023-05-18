import { useState } from "react";
import Burger from "./Burger.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Thomas.Fch</h2>
      <img className="menu" src="frontend\src\assets\logos\menu.png" onClick={() => setOpen(!open)} alt="menu_icon" />
      <Burger open={open} setOpen={setOpen} />
    </nav>
  );
}

export default Navbar;
