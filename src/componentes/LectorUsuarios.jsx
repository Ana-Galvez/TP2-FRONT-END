import { useState,useEffect } from "react";

const LectorUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => {
        if (!response.ok) { //para tener el mensaje de error
          throw new Error("No se pudo obtener la información desde la API");
        }
        return response.json();
      })
      .then((data) => {
        setUsuarios(data.results);
        setCargando(false);
      })
      .catch((error) => {
        // Se guarda el mensaje
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (error) {
    return (
      <p>
        ⚠️ Error: {error}
      </p>
    );
  }

    if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div>
      {usuarios.map((usuario, index) => (
        <div
          key={index}
        >
          <img
            src={usuario.picture.large}
            alt={`${usuario.name.first} ${usuario.name.last}`}
          />
          <div>
            <h2>
              {usuario.name.first} {usuario.name.last}
            </h2>
            <p>
              📍 {usuario.location.city}, {usuario.location.state},{" "}
              {usuario.location.country}
            </p>
            <p>📧 {usuario.email}</p>
            <p>📞 {usuario.phone}</p>
            <p>🎂 {usuario.dob.age} años</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default LectorUsuarios