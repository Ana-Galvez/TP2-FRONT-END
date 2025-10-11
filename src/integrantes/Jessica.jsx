import React, { useState } from "react";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import MostrarOcultar from "../componentes/MostrarOcultar";
import Footer from "../componentes/Footer";
import imgJessica from "../assets/jessica.png"; // reemplaza por tu imagen
import "./Jessica.css";

const Jessica = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`jessica-container ${isDark ? "dark-mode" : ""}`}>
      <Sidebar />
      <div className="jessica-content">
        <HeaderIntegrantes>
          <h1>Jessica</h1>
          <p>Ubicación: Ciudad | Edad: 25</p>
          <img src={imgJessica} alt="Jessica" />
        </HeaderIntegrantes>

        <MostrarOcultar titulo="Habilidades">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Trabajo en equipo</li>
          </ul>
        </MostrarOcultar>

        <MostrarOcultar titulo="Películas favoritas">
          <ul>
            <li>Titanic</li>
            <li>Pasajeros</li>
            <li>Diario de una pasión</li>
          </ul>
        </MostrarOcultar>

        <MostrarOcultar titulo="Música / Discos favoritos">
          <ul>
            <li>Celine Dion</li>
            <li>Ha*Ash</li>
            <li>Chayanne</li>
          </ul>
        </MostrarOcultar>

        <Footer>
          <p>© 2025 Equipo Retro Front End Grupo 12</p>
        </Footer>
      </div>
    </div>
  );
};

export default Jessica;
