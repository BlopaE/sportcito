import React, {useState} from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Login = () => {

  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construir el objeto de datos a enviar
    const datos = {
      nombre: nombre,
      password: password,
    };

    try {
      // Realizar la solicitud POST a la API
      console.log(datos)
      const response = await axios.post("http://localhost:4000/api/login", datos);
      console.log("Respuesta del servidor:", response.data);
      alert("Bienvenido "+datos.nombre);
      navigate("/ejercicios");
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div>
      <div>
        <FaUser />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Entrar</button>
        </form>
        <Link to="/register">¿No tienes una cuenta? Registrate</Link>
      </div>
    </div>
  );
};

export default Login;
