import "../assets/styles/portada.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModoOscuro from "../componentes/ModoOscuro";
import Sidebar from "../componentes/Sidebar";
import Footer from "../componentes/Footer";

const DiagramaCarpetas = () => {

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
    <h1 style={{textAlign:"center"}}>Diagrama de Carpetas</h1>
    <p>ACA VA LA IMG</p>
    <Footer> 
      <p>
        © 2025 Equipo Retro Front End Grupo 12 —{" "}
        <Link to="/paginas/bitacora">Bitacora</Link> 
      </p>
      <p>Insert Coin 💾</p>
    </Footer>
    </div>
    </div>
  )
}
export default DiagramaCarpetas