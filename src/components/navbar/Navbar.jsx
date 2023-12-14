import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import brazo from "../../assets/brazo.png";

const Navbar = () => {
  const [showed, setShowed] = useState(true);

  const handleShowed = () => {
    setShowed(!showed);
  };

  return (
    <nav className={`nav ${showed ? "" : "hidden"}`}>
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav__link">
          <Link to="/ejercicios">Ejercicios</Link>
        </li>
        <li className="nav__link">
          <Link to="/rutinas">Rutinas</Link>
        </li>
        <li className="nav__link">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <button className={`nav__button ${showed ? "" : "hidden__button"}`} onClick={handleShowed}>
        <img src={brazo} alt="boton brazo" className="nav__button-img" />
      </button>
    </nav>
  );
};

export default Navbar;
