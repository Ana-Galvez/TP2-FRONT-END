import { useState, useEffect, useCallback } from "react";

const AgregarBitacora = ({ itemsIniciales }) => {
  const STORAGE_KEY = "bitacora-items";

  // Cargar los datos desde localStorage al iniciar
  const [items, setItems] = useState(() => {
    const guardados = localStorage.getItem(STORAGE_KEY);
    return guardados ? JSON.parse(guardados) : itemsIniciales;
  });

  const [nuevoItem, setNuevoItem] = useState("");

  // Guardar automáticamente cada vez que cambie la lista
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleAgregar = () => {
    const texto = nuevoItem.trim();
    if (texto === "") return;
    setItems([...items, texto]);
    setNuevoItem("");
  };

  const handleBorrar = useCallback((index) => {
    const nuevaLista = items.filter((_, i) => i !== index);
    setItems(nuevaLista);
  });

  return (
    <>
      <ul className="">
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {item}
            <button
              className=""
              onClick={() => handleBorrar(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="">
        <input
          type="text"
          value={nuevoItem}
          onChange={(e) => setNuevoItem(e.target.value)}
          placeholder="Escribí una nueva entrada..."
        />
        <button className="" onClick={handleAgregar}>
          Agregar
        </button>
      </div>
    </>
  );
};

export default AgregarBitacora;
