import React from "react";
import SearchExercises from "../components/SearchExercises/SearchExercises";
import Exercises from "../components/Exercises/Exercises";
import { useState } from "react";

const Ejercicios = () => {

  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </div>
  );
};

export default Ejercicios;
