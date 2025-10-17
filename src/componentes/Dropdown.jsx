import React from 'react';

// El componente ahora es "controlado": recibe su estado y su función de click desde el padre
const Dropdown = ({ title, children, isOpen, onClick }) => {

  // Se eliminó el estado interno (useState)

  return (
    // Usa las props recibidas para definir la clase y el evento onClick
    <div className={`dropdown-column ${isOpen ? 'active' : ''}`} onClick={onClick}>
      <h3 className="dropdown-title">{title}</h3>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;

