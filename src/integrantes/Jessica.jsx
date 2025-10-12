import "../assets/styles/portada.css";
import { useState } from "react";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes"; 
import SobreMi from "../componentes/SobreMi";
import MostrarOcultar from "../componentes/MostrarOcultar";
import Footer from "../componentes/Footer";
import imgJessica from "../assets/jes.png";
import "../assets/styles/jessica.css";

const Jessica = () => {
  const [quote, setQuote] = useState("");

  const quotes = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti y todo será posible.",
    "La disciplina es el puente entre metas y logros.",
    "Cada día es una nueva oportunidad para crecer.",
    "Haz hoy lo que tu futuro yo te agradecerá."
  ];

  const newQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="portada-container body">
      <Sidebar />
      <div className="main-content">
        <HeaderIntegrantes>
        <div className="hero">
          <img src={imgJessica} alt="Jessica" className="avatar"/>
          <h1>Jessica Oleszuk</h1>
          <p className="info" style={{  fontFamily: "'Poppins', sans-serif"}}>Ubicación: Tucumán | Edad: 38 años</p>
        </div>
        </HeaderIntegrantes>
        <span style={{marginTop:"30px"}}></span>
        <SobreMi
        titulo="Sobre mí"
        descripcion="Soy estudiante de la Tecnicatura en desarrollo de Software, con interés en diseño frontend y experiencia de usuario. Me encanta aprender nuevas tecnologías y trabajar en equipo, aprendo mucho de mis compañeros tambíen."
      />

                {/* Frases motivacionales */}
        <div >
          <h2>Te dejo una frase de regalo</h2>
          <div id="quote">{quote || "Presioná el botón para ver una frase motivacional"}</div>
          <button className="btn" onClick={newQuote}>Nueva frase</button>
        </div>

        <MostrarOcultar titulo="Habilidades" botonClassName="btn">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Trabajo en equipo</li>
          </ul>
        </MostrarOcultar>

        <MostrarOcultar titulo="Películas favoritas" botonClassName="btn">
          <ul>
            <li>Titanic</li>
            <li>En busca de la felicidad</li>
            <li>Diario de una pasión</li>
          </ul>
        </MostrarOcultar>

        <MostrarOcultar titulo="Música / Discos favoritos" botonClassName="btn">
          <ul>
            <li>Miranda</li>
            <li>Tan Bionica</li>
            <li>Maria Becerra</li>
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
