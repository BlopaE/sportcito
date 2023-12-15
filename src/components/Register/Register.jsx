import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construir el objeto de datos a enviar
    const datos = {
      usuario: usuario,
      contrasena: contrasena,
    };

    try {
      // Realizar la solicitud POST a la API
      const response = await axios.post("http://localhost:4000/api/guardar", datos);
      console.log("Respuesta del servidor:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
