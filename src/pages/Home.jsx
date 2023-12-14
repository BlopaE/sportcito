import React, {useState} from 'react'
import SearchExercises from '../components/SearchExercises/SearchExercises';
import Exercises from '../components/Exercises/Exercises';
import PostCard from '../components/PostCard/PostCard';

const Home = () => {

  //Aqui no va esto, esto va en Ejercicios
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  //Programar funcion para obtener los datos de la pagina de FB

  return (    
    <div className=' page section padding'>
      <PostCard title="Post 1" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nesciunt unde similique officiis nihil accusantium at optio voluptatum veritatis saepe architecto minima ipsum, dolor tempore quae, quia ipsam enim illo."/>

      <PostCard title="Post 2" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nesciunt unde similique officiis nihil accusantium at optio voluptatum veritatis saepe architecto minima ipsum, dolor tempore quae, quia ipsam enim illo."/>
    </div>
  )
}

export default Home