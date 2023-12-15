import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Register from "../Register/Register";

const Login = () => {
  return (
    <div>
      <div>
        <FaUser />
        <form action="/api/guardar">
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" />
          <button type="submit">Entrar</button>
        </form>
        <Link to="/register">¿No tienes una cuenta? Registrate</Link>
      </div>
    </div>
  );
};

export default Login;
