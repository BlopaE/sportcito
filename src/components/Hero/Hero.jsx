import React, {useState} from "react";
import logo from "../../assets/logo.png";
import "./hero.css";
import {FaUser} from "react-icons/fa";

const Hero = () => {

  const [logged, setLogged] = useState(false)

  //Programar funcion del Login, conectar con base de datos
  function handleLogin() {

  }
 
  return (
    <div className="hero">
      <div className="hero__login">
        <FaUser/>
        <p>{logged ? "Perfil" : "Login"}</p>
      </div>
      <h1 className="hero__title">SportcITO</h1>
      <div className="hero__logo">
        <img src={logo} alt="Logo"/>
      </div>
    </div>
  );
};

export default Hero;
