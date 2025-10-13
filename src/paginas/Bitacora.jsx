import "../assets/styles/portada.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModoOscuro from "../componentes/ModoOscuro";
import Sidebar from "../componentes/Sidebar";
import HeaderPortadaBitacora from "../componentes/HeaderPortadaBitacora";
import AgregarBitacora from "../componentes/AgregarBitacora";
import Footer from "../componentes/Footer";

const Bitacora = () => {
  const bitacoraItems = [
    "Definimos usar el esquema principal para todas las páginas, aunque podemos hacer cambios. Esto fue lo que nos llevó un poco de tiempo decidir.",
    "Google Fonts generales: Inter, Press Start 2P y Poppins.",
    "Uso de variables en CSS para colores.",
    "Uso de hover, transform, linear gradient, box-shadow, etc.",
    "Componentes reutilizables con y sin props, también el uso de children",
    "Uso de useState, useEffect, useCallback y useRef",
    "Utilización de React Router",
    "Funcionalidades de React como filtro por integrantes, agregado de lista, alert, etc.",
    "Se agregó ícono de toda la página.",
    "Se utilizó para el fondo de uno de los perfiles el proyecto colaborativo 'hydra'.",
    "Agregamos sección con link al repositorio de GitHub.",
    "Implementación del proyecto en Vercel importando el repositorio de GitHub.",
  ];

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
      <Sidebar />
      <div className="content-sections">
      <div className="header-portada-bitacora">
      <HeaderPortadaBitacora titulo="Bitácora" />
      <AgregarBitacora itemsIniciales={bitacoraItems} /></div>
      <Footer>
        <p>
          © 2025 Equipo Retro Front End Grupo 12 — 
          <Link to="/integrantes/tomas" className="footer-integrantes">Tomás</Link> - 
          <Link to="/integrantes/virginia" className="footer-integrantes">Virginia</Link> - 
          <Link to="/integrantes/jessica" className="footer-integrantes">Jessica</Link> - 
          <Link to="/integrantes/alvaro" className="footer-integrantes">Álvaro</Link> - 
          <Link to="/integrantes/ana" className="footer-integrantes">Ana</Link>
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
      </div>
    </div>
  );
};
export default Bitacora;
