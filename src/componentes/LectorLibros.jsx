import { useState, useEffect } from "react";
import TarjetaLibro from "./TarjetaLibro";
import datosLibros from "../../public/data.json";

const LectorLibros = () => {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);

    useEffect(() => {
      try {
        setLibros(datosLibros);
      } catch (error) {
        console.error("Error al cargar los datos de libros:", error);
      } finally {
      setCargando(false);
      }
    }, []);

  if (cargando) {
    return <p>Cargando datos de libros...</p>;
  }

  if (libros.length === 0) {
    return <p>No se encontraron libros.</p>;
  }

  return (
    <div>
      <h1>Catálogo de Libros (Datos JSON)</h1>
      <div>
        {libros.map((libro) => (
          <TarjetaLibro 
            key={libro.id}
            libro={libro}
          />
        ))}
      </div>
    </div>
  )
}
export default LectorLibros