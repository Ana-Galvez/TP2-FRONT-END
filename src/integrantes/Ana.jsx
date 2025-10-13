import "../assets/styles/portada.css";
import imgAna from "../assets/ana.PNG";
import { useState } from "react";
import { Link } from "react-router-dom";
import EfectoEscrituraAna from "../componentes/EfectoEscrituraAna";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import MostrarOcultar from "../componentes/MostrarOcultar";
import Footer from "../componentes/Footer";

const Ana = () => {

  return (
    <div className="portada-container">
      <Sidebar/>
      <div className="main-content">
      <HeaderIntegrantes>
          <EfectoEscrituraAna/>
          <img src={imgAna} alt="Imagen de ana" style={{width:"15%",borderRadius:"15%"}}></img>
      </HeaderIntegrantes>
      <MostrarOcultar titulo="Habilidades" widthClassName="boton-agregar-bitacora-ancho">
        <ul className="lista-portada">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Colaborativa</li><li>Proactiva</li>
        </ul>
      </MostrarOcultar>
      <MostrarOcultar titulo="Películas favoritas" widthClassName="boton-agregar-bitacora-ancho">
        <ul className="lista-portada"><li>Titanic</li><li>Pasajeros</li><li>Diario de una pasión</li></ul>
      </MostrarOcultar>
      <MostrarOcultar titulo="Música / Discos favoritos" widthClassName="boton-agregar-bitacora-ancho">
        <ul className="lista-portada"><li>Celine Dion</li><li>Ha*Ash</li><li>Chayanne</li></ul>
      </MostrarOcultar>
      <span style={{marginTop:"30px"}}></span>
      <Footer> 
        <p>
          © 2025 Equipo Retro Front End Grupo 12 —{" "}
          <Link to="/paginas/bitacora">Bitacora</Link> 
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
      </div>
    </div>
  );
};

export default Ana;
