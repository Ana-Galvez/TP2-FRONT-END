import "../assets/styles/portada.css";
import { Link } from "react-router-dom";

const TarjetaIntegrante = ({ nombre, imagen, ruta }) => {
  return (

    <Link
      to={ruta}
      className="tarjeta-integrante"
    >
      <img
        src={imagen}
        alt={nombre}
        className="tarjeta-imagen"
      />
      <strong>{nombre}</strong>
    </Link>
  );
};

export default TarjetaIntegrante;
