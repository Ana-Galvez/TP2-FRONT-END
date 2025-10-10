const TarjetaLibro = ({libro}) => {

  const { titulo, autor, genero, año_publicacion, paginas, idioma } = libro;


  return (
     <div>
      <h3>📚 {titulo}</h3>
      <p>
        <strong>Autor:</strong> {autor}
      </p>
      <p>
        <strong>Género:</strong> {genero}
      </p>
      <p>
        <strong>Publicación:</strong> {año_publicacion}
      </p>
      <p>
        <strong>Páginas:</strong> {paginas}
      </p>
      <p>
        <strong>Idioma:</strong> {idioma}
      </p>
    </div>
  )
}
export default TarjetaLibro