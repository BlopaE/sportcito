import React, {useState} from "react";
import brazo from "../../assets/brazo.png";
import "./social.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Social = () => {

  const [showed, setShowed] = useState(true);

  const handleShowed = () => {
    setShowed(!showed);
  };

  return (
    <footer className={`footer ${showed ? "" : "hidden"}`}>
      <div className="footer__content">
        <p className="footer__title">Redes Sociales</p>
        <div className="footer__media">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p className="footer__footer">Todos los derechos reservados</p>
      </div>
      <button className={`footer__button ${showed ? "" : "hidden__button"}`} onClick={handleShowed}>
        <img src={brazo} alt="boton brazo" className="footer__button-img" />
      </button>
    </footer>
  );
};

export default Social;
