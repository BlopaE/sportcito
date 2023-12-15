import React, {useState} from 'react'
import SearchExercises from '../components/SearchExercises/SearchExercises';
import Exercises from '../components/Exercises/Exercises';
import PostCard from '../components/PostCard/PostCard';
import Imagen from "../assets/referencia.jpg";

const Home = () => {

  //Aqui no va esto, esto va en Ejercicios
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  //Programar funcion para obtener los datos de la pagina de FB

  return (    
    <div>
      <PostCard title="¿Cómo entrenar siendo principante?" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nesciunt unde similique officiis nihil accusantium at optio voluptatum veritatis saepe architecto minima ipsum, dolor tempore quae, quia ipsam enim illo." image={Imagen}/>
      <PostCard title="¿Cómo entrenar siendo principante?" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nesciunt unde similique officiis nihil accusantium at optio voluptatum veritatis saepe architecto minima ipsum, dolor tempore quae, quia ipsam enim illo." image={Imagen}/>
      <PostCard title="¿Cómo entrenar siendo principante?" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nesciunt unde similique officiis nihil accusantium at optio voluptatum veritatis saepe architecto minima ipsum, dolor tempore quae, quia ipsam enim illo." image={Imagen}/>
    </div>
  )
}

export default Home