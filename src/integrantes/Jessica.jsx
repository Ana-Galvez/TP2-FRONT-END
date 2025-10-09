import imgJessica from "../assets/jes.png";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import Footer from "../componentes/Footer";

const Jessica = () => {
  return (
    <>
      <Sidebar/>
      <HeaderIntegrantes>
        <img src={imgJessica} alt="Avatar Jessica" class="avatar" />
        <h1>Jessica Oleszuk</h1>
        <p class="info"> Tucumán | Edad: 38 </p>
      </HeaderIntegrantes>
      <Footer>
        <p>© 2025 Jessica Oleszuk | Grupo 12 - Front End</p>
      </Footer>
    </>
  )
}
export default Jessica