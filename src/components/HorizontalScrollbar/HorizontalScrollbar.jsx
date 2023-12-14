import React, { useContext } from "react";
import HorizontalScrollMenu, { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";
import BodyPart from "../BodyPart/BodyPart";
import ExerciseCard from "../ExcerciseCard/ExerciseCard";
import RightArrowIcon from "../../assets/right-arrow.png";
import LeftArrowIcon from "../../assets/left-arrow.png";
import "./HorizontalScrollbar.css";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {

  return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="menu">
      {data.map((item) => (
        <div key={item.id || item} itemId={item.id || item} title={item.id || item} className="menu-item">
          {isBodyParts ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
      </ScrollMenu >
  );
};

export default HorizontalScrollbar;
