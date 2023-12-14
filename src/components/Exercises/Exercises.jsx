import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";
import "./exercises.css";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div id="exercises">
      <p>
        {exercises.length} Ejercicios para <span>{bodyPart}</span>
      </p>
      <HorizontalScrollbar data={exercises} isBodyParts={false} />
    </div>
  );
};

export default Exercises;
