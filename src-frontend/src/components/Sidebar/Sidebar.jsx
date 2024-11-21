import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <ul>
        <li className="active">Inicio</li>
        <li>Productos</li>
        <li>Inf Ventas</li>
        <li>Historial</li>
        <li>Chats</li>
      </ul>
    </div>
  );
};

export default Sidebar;
