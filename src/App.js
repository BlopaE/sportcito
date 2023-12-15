import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Social from "./components/Social/Social";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Ejercicios from "./pages/Ejercicios";
import Rutinas from "./pages/Rutinas";
import Contacto from "./pages/Contacto";
import Login from "./components/Login/Login";
import "./App.css";
import Register from "./components/Register/Register";


const App = () => {
  const [user, setUser] = React.useState({});

  return (
    <Router>
          <div className="app">
            <Navbar />
            <div className="page padding scrolleable">
              <Hero />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/ejercicios" element={<Ejercicios />} />
                <Route path="/rutinas" element={<Rutinas />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <Social />
          </div>
    </Router>
  );
};

export default App;
