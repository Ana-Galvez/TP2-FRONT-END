import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import Footer from "../componentes/Footer";

const Virginia = () => {
  return (
    <>
      <Sidebar/>
      <h1>Virginia</h1>
      <Footer>
        <p>© 2025 Grupo 12 — <Link to="/paginas/bitacora">Bitacora</Link></p>
      </Footer>
    </>
  )
}
export default Virginia