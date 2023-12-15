import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {

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
      const response = await axios.post("http://localhost:4000/api/guardar", datos);
      console.log("Respuesta del servidor:", response.data);
      alert(response.data.message)
      navigate("/ejercicios")
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
