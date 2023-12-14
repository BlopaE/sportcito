import React from "react";
import "./exerciseCard.css";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="cardExercise">
      <img src={exercise.gifUrl} alt={exercise.name}/>
      <p>{exercise.name}</p>
    </div>
  );
};

export default ExerciseCard;
