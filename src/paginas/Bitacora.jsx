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
    "Google Fonts generales: Inter, Press Start 2P y Space Mono.",
    "Uso de variables en CSS para colores.",
    "Uso de hover, transform, linear gradient, box-shadow, etc.",
    "Componentes reutilizables con y sin props, también el uso de children",
    "Uso de useState, useEffect, useCallback y useRef",
    "Utilización de React Router",
    "Funcionalidades de React como dar opción Modo Oscuro, filtro por integrantes, agregado de lista, alert, etc.",
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
    <div style={themeStyles}>
      <ModoOscuro toggleTheme={toggleTheme} isDark={isDark}/>
      <Sidebar />
      <HeaderPortadaBitacora titulo="Bitácora" />
      <AgregarBitacora itemsIniciales={bitacoraItems} />
      <Footer>
        <p>
          © 2025 Equipo Retro Front End Grupo 12 — 
          <Link to="/integrantes/tomas">Tomás</Link> - 
          <Link to="/integrantes/virginia">Virginia</Link> - 
          <Link to="/integrantes/jessica">Jessica</Link> - 
          <Link to="/integrantes/alvaro">Álvaro</Link> - 
          <Link to="/integrantes/ana">Ana</Link>
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
    </div>
  );
};
export default Bitacora;
