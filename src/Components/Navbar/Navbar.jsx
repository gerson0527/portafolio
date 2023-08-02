import React from "react";
import { FaBars } from "react-icons/fa";
import "../../app.css";

function Navbar() {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
          <FaBars />
        </label>
        <label className="logo">Gerson Ortiz</label>
        <ul>
          <li>
            <a className="active" href="#">
              sobre mi
            </a>
          </li>
          <li>
            <a href="#">proyectos</a>
          </li>
          <li>
            <a href="#">mi cv</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
