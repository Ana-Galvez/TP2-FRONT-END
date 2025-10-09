import imgAna from "../assets/ana.PNG";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModoOscuro from "../componentes/ModoOscuro"
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
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
    <div style={themeStyles}>
      <ModoOscuro toggleTheme={toggleTheme} isDark={isDark}/>
      <Sidebar/>
      <HeaderIntegrantes>
          <h1>Ana</h1>
          <p>Ubicación: La Matanza | Edad: 43</p>
          <img src={imgAna} alt="Imagen de ana"></img>
      </HeaderIntegrantes>
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
