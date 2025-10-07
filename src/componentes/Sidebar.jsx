import { useState } from "react";
import { Link } from "react-router-dom"
import icono from '../assets/favicon.ico';

const Sidebar = () => {

    // Estado para abrir/cerrar el submenú de Integrantes
  const [mostrarIntegrantes, setMostrarIntegrantes] = useState(false);

  const toggleIntegrantes = () => {
    setMostrarIntegrantes(!mostrarIntegrantes);
  };

  return (
    <div>
      <img src={icono} alt="Icono del grupo" style={{width:'50px',height:'50px'}} />
      <ul>
        <li><Link to="/">Portada</Link></li>
        <li><Link to="/paginas/bitacora">Bitacora</Link></li>
        <li><Link to="/paginas/datosarchivosjson">Datos JSON</Link></li>
        <li><Link to="/paginas/datosapi">Datos API</Link></li>
        <li><Link to="/paginas/arbolrenderizado">Árbol de Renderizado</Link></li>
        <li><Link to="/paginas/diagramacarpetas">Diagrama de carpetas</Link></li>
        <li><a onClick={toggleIntegrantes}>
          {mostrarIntegrantes ? "▼ Integrantes" : "► Integrantes"}</a>
        </li>
        {mostrarIntegrantes && (
            <ul style={{ listStyle: "none", paddingLeft: "15px", marginTop: "5px" }}>
              <li>
                <Link to="/integrantes/ana">
                  Ana
                </Link>
              </li>
              <li>
                <Link to="/integrantes/virginia">
                  Virginia
                </Link>
              </li>
              <li>
                <Link to="/integrantes/tomas">
                  Tomás
                </Link>
              </li>
              <li>
                <Link to="/integrantes/jessica">
                  Jessica
                </Link>
              </li>
              <li>
                <Link to="/integrantes/alvaro">
                  Álvaro
                </Link>
              </li>
            </ul>
          )}
      </ul>
    </div>
  ) 
}
export default Sidebar