import imgAna from "../assets/ana.PNG";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModoOscuro from "../componentes/ModoOscuro"
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";
import Habilidadades from "../componentes/Habilidadades";
import PeliculasFavoritas from "../componentes/PeliculasFavoritas";

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
    <div style={themeStyles}>
      <ModoOscuro toggleTheme={toggleTheme} isDark={isDark}/>
      <Sidebar/>
      <HeaderIntegrantes>
          <h1>Ana</h1>
          <p>Ubicación: La Matanza | Edad: 43</p>
          <img src={imgAna} alt="Imagen de ana"></img>
      </HeaderIntegrantes>
      <Habilidadades>
        <h2>Habilidades</h2>
        <ul id="skills-list">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Colaborativa</li><li>Proactiva</li>
         </ul>
        <button>Mostrar/Ocultar</button>  
      </Habilidadades>
      <PeliculasFavoritas>
        <h2>Películas favoritas</h2>
        <ul id="movies-list"><li>Titanic</li><li>Pasajeros</li><li>Diario de una pasión</li></ul>
        <button>Mostrar/Ocultar</button>
      </PeliculasFavoritas>
      <Footer> 
        <p>
          © 2025 Equipo Retro Front End Grupo 12 —{" "}
          <Link to="/paginas/bitacora">Bitacora</Link> 
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
    </div>
  );
};

export default Ana;
