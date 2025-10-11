import { useState } from "react"

const MostrarOcultar = ({titulo,children}) => {

  const [isVisible, setIsVisible] = useState(true);

    const visibleONo = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div>
        <h2 style={{textAlign:"center", fontSize:"1.05rem",marginTop:"40px"}}>{titulo}</h2>
        {/* Ver el contenido */}
        {isVisible && (
          <div>
            {children}
          </div>
         )}
        <button onClick={visibleONo} className="boton-agregar-bitacora" style={{width:"100%"}}>
          {isVisible ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>

    </div>
  )
}
export default MostrarOcultar