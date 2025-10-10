import { useState } from "react";
import { Link } from "react-router-dom";
import icono from "../assets/favicon.ico";
import "../assets/styles/sidebar.css";

const Sidebar = () => {
  // Estado para abrir/cerrar el submenú de Integrantes
  const [mostrarIntegrantes, setMostrarIntegrantes] = useState(false);

  // Controla menú hamburguesa
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const toggleIntegrantes = () => {
    setMostrarIntegrantes(!mostrarIntegrantes);
  };

  const toggleSidebar = () => setSidebarAbierto(!sidebarAbierto);

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`sidebar ${sidebarAbierto ? "open" : ""}`}>
        <div className="sidebar-header">
          <img
            src={icono}
            alt="Icono del grupo"
            className="sidebar-icon"
          />
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">Portada</Link>
          </li>
          <li>
            <Link to="/paginas/bitacora">Bitacora</Link>
          </li>
          <li>
            <Link to="/paginas/datosarchivosjson">Datos JSON</Link>
          </li>
          <li>
            <Link to="/paginas/datosapi">Datos API</Link>
          </li>
          <li>
            <Link to="/paginas/arbolrenderizado">Árbol de Renderizado</Link>
          </li>
          <li>
            <Link to="/paginas/diagramacarpetas">Diagrama de carpetas</Link>
          </li>
          <li>
            <button className="submenu-toggle" onClick={toggleIntegrantes}>
              {mostrarIntegrantes ? "▼ Integrantes" : "► Integrantes"}
            </button>
          
          {mostrarIntegrantes && (
            <ul
              className="submenu"
            >
              <li>
                <Link to="/integrantes/ana">Ana</Link>
              </li>
              <li>
                <Link to="/integrantes/virginia">Virginia</Link>
              </li>
              <li>
                <Link to="/integrantes/tomas">Tomás</Link>
              </li>
              <li>
                <Link to="/integrantes/jessica">Jessica</Link>
              </li>
              <li>
                <Link to="/integrantes/alvaro">Álvaro</Link>
              </li>
            </ul>
          )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
