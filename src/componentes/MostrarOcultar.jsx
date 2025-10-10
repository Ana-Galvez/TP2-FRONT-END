import { useState } from "react"

const MostrarOcultar = ({titulo,children}) => {

  const [isVisible, setIsVisible] = useState(true);

    const visibleONo = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div>
        <h2>{titulo}</h2>
        {/* Ver el contenido */}
        {isVisible && (
          <div>
            {children}
          </div>
         )}
        <button onClick={visibleONo}>
          {isVisible ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>

    </div>
  )
}
export default MostrarOcultar