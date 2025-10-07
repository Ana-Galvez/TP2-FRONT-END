import { Link } from "react-router-dom";

const TarjetaIntegrante = ({ nombre, imagen, ruta }) => {
  return (
    <Link
      to={ruta}
      className="member"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        margin: "10px",
      }}
    >
      <img
        src={imagen}
        alt={nombre}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "8px",
          objectFit: "cover",
          marginBottom: "8px",
        }}
      />
      <strong>{nombre}</strong>
    </Link>
  );
};

export default TarjetaIntegrante;
