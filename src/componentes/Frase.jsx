import React, { useState, useEffect } from "react";

const Frase = () => {
  const frases = [
    "La vida es 10% lo que te pasa y 90% cómo reaccionas.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "No cuentes los días, haz que los días cuenten.",
    "La motivación te impulsa, el hábito te mantiene.",
    "Cree en ti mismo y todo será posible."
  ];

  const [fraseActual, setFraseActual] = useState("");

  useEffect(() => {
    const index = Math.floor(Math.random() * frases.length);
    setFraseActual(frases[index]);
  }, []);

  return (
    <div className="frase">
      <p>{fraseActual}</p>
    </div>
  );
};

export default Frase;
