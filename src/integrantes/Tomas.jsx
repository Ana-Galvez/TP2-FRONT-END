import imgTomas from "../assets/tomas.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";

const Tomas = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
        <h1>Tomas Julian</h1>
        <p>Ubicación: Ciudad Autonoma de Buenos Aires | Edad: 22</p>
        <img src={imgTomas} alt="Avatar Tomas" class="avatar-right" id="tomas-avatar"></img>
      </HeaderIntegrantes>
      <Footer/>
    </>
  )
}
export default Tomas