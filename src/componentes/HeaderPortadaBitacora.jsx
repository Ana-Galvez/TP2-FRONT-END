import "../assets/styles/portada.css";

const HeaderPortadaBitacora = ({ titulo, subtitulo, descripcion, items }) => {
  return (
    <header>
      <h1>{titulo}</h1>

      {subtitulo && <h2 className="">{subtitulo}</h2>}

      {descripcion && <p className="lista-portada">{descripcion}</p>}

      {items && (
        <ul className="lista-portada">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default HeaderPortadaBitacora;
