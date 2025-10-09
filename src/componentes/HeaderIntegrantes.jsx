import { useRef } from "react";

const HeaderIntegrantes = ({children}) => {
  const headerRef = useRef(null); 
  return (
    <header className="footer" ref={headerRef}>
      {children}
    </header>
  )
}
export default HeaderIntegrantes