import "../assets/styles/portada.css";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import Footer from "../componentes/Footer";

const DiagramaCarpetas = () => {

  return (
    <div className="portada-container">
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