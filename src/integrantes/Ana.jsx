import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import Footer from "../componentes/Footer";

const Ana = () => {
  return (
    <>
      <Sidebar/>
      <h1>Ana</h1>
      <Footer> 
        <p>
          © 2025 Equipo Retro Front End Grupo 12 —{" "}
          <Link to="/paginas/bitacora">Bitacora</Link> 
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
    </>
  );
};

export default Ana;
