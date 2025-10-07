const HeaderPortadaBitacora = ({ titulo, subtitulo, descripcion, items }) => {
  return (
    <header className="">
      <h1>{titulo}</h1>

      {subtitulo && <h2 className="">{subtitulo}</h2>}

      {descripcion && <p>{descripcion}</p>}

      {items && (
        <ul className="">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default HeaderPortadaBitacora;
