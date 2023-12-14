import React from "react";
import Icon from "../../assets/gym.png";
import Back from "../../assets/espalda.png";
import Cardio from "../../assets/cardio.png";
import Chest from "../../assets/pecho.png";
import LowerArms from "../../assets/antebrazo.png";
import LowerLegs from "../../assets/pantorrillas.png";
import Neck from "../../assets/cuello.png";
import Shoulders from "../../assets/hombros.png";
import UpperArms from "../../assets/brazos.png";
import UpperLegs from "../../assets/piernas.png";
import Waist from "../../assets/abdomen.png";

import "./bodyPart.css";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  function definirIcon() {
    let img = null;

    switch (item) {
      case "all":
        img = Icon;
        break;
      case "back":
        img = Back;
        break;
      case "cardio":
        img = Cardio;
        break;
      case "chest":
        img = Chest;
        break;
      case "lower arms":
        img = LowerArms;
        break;
      case "lower legs":
        img = LowerLegs;
        break;
      case "neck":
        img = Neck;
        break;
      case "shoulders":
        img = Shoulders;
        break;
      case "upper arms":
        img = UpperArms;
        break;
      case "upper legs":
        img = UpperLegs;
        break;
      case "waist":
        img = Waist;
        break;
      default:
        img = Icon;
        break;
    }
    return img;
  }

  return (
    <div
      className="card"
      onClick={() => {
        setBodyPart(item);
        // window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={definirIcon()} alt="dumble" style={{ width: "40px", height: "40px" }} />
      <p>{item}</p>
    </div>
  );
};

export default BodyPart;
