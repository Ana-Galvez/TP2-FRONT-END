import { useState } from "react";
import { Link } from "react-router-dom";
import ModoOscuro from "../componentes/ModoOscuro";
import Sidebar from "../componentes/Sidebar";
import Footer from "../componentes/Footer";

const DatosAPI = () => {
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
      <h1>Datos de la API</h1>
      <Footer> 
        <p>
          © 2025 Equipo Retro Front End Grupo 12 —{" "}
          <Link to="/paginas/bitacora">Bitacora</Link> 
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
    </div>
  )
}
export default DatosAPI