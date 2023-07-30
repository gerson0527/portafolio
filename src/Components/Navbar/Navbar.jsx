import React from "react";
import "../../app.css";
function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__left">
          <h2>Gerson Ortiz</h2>
        </div>
        <div className="navabr__rigth">
          <ul className="ul">
            <li>
              <a href="">inicio</a>
            </li>
            <li>
              <a href="">sobre mi</a>
            </li>
            <li>
              <a href="">proyectos</a>
            </li>
            <li>
              <a href="">contactanos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
