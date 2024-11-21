import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Listado de Productos</h1>
      <div className="header-icons">
        <button className="icon">🔄</button>
        <button className="icon">🔍</button>
      </div>
    </div>
  );
};

export default Header;
