import { useEffect, useRef } from "react";

const EfectoEscrituraAna = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const nombreEl = h1Ref.current;
    const descripcionEl = pRef.current;
    if (!nombreEl || !descripcionEl) return;

    const nombre = "Ana";
    const descripcion = "Ubicación: La Matanza | Edad: 43";

    let i = 0;
    const interval = setInterval(() => {
      if (i < nombre.length || i < descripcion.length) {
        nombreEl.textContent += nombre.charAt(i) || "";
        descripcionEl.textContent += descripcion.charAt(i) || "";
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 ref={h1Ref}></h1>
      <p ref={pRef} className="lista-portada"></p>
    </>
  );
};

export default EfectoEscrituraAna;
