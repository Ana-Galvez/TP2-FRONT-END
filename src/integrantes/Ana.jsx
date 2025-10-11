import "../assets/styles/portada.css";
import imgAna from "../assets/ana.PNG";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModoOscuro from "../componentes/ModoOscuro"
import EfectoEscrituraAna from "../componentes/EfectoEscrituraAna";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import MostrarOcultar from "../componentes/MostrarOcultar";
import Footer from "../componentes/Footer";

const Ana = () => {

  // Estado del Modo
  const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };
    const themeStyles = {
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
  };

  return (
    <div className={`portada-container ${isDark ? "dark-mode" : ""}`}>
      {/* <ModoOscuro toggleTheme={toggleTheme} isDark={isDark}/> */}
      <Sidebar/>
      <div className="main-content">
      <HeaderIntegrantes>
          <EfectoEscrituraAna/>
          <img src={imgAna} alt="Imagen de ana" style={{width:"15%",borderRadius:"15%"}}></img>
      </HeaderIntegrantes>
      <MostrarOcultar titulo="Habilidades">
        <ul className="lista-portada">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Colaborativa</li><li>Proactiva</li>
        </ul>
      </MostrarOcultar>
      <MostrarOcultar titulo="Películas favoritas">
        <ul className="lista-portada"><li>Titanic</li><li>Pasajeros</li><li>Diario de una pasión</li></ul>
      </MostrarOcultar>
      <MostrarOcultar titulo="Música / Discos favoritos">
        <ul className="lista-portada"><li>Celine Dion</li><li>Ha*Ash</li><li>Chayanne</li></ul>
      </MostrarOcultar>
      <span style={{marginTop:"30px"}}></span>
      <Footer> 
        <p>
          © 2025 Equipo Retro Front End Grupo 12 —{" "}
          <Link to="/paginas/bitacora">Bitacora</Link> 
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
      </div>
    </div>
  );
};

export default Ana;
