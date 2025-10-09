import imgAlvaro from "../assets/alvaro.png"
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";

const Alvaro = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
          <h1 class="typewriter">Alvaro Coronel Castellani</h1>
          <p> Ubicación: Córdoba, Argentina | Edad: 30</p>
          <img src={imgAlvaro} alt="Avatar Alvaro" class="avatar-right" id="alvaro-avatar"></img>
      </HeaderIntegrantes>
      <Footer>
        <p>© 2025 Alvaro Facundo Coronel - Proyecto de presentación</p>
      </Footer>
    </>
  )
}
export default Alvaro