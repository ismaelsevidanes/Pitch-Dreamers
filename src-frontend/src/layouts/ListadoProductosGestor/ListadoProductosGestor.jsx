import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import ProductTable from './components/ProductTable/ProductTable';
import './ListadoProductosGestor.css';

const ListadoProductosGestor = () => {
  return (
    <div className="ListadoProductosGestor">
      <Sidebar />
      <Header />
      <div className="content">
        <h1 className="title">Listado de productos</h1>
        <ProductTable />
      </div>
    </div>
  );
};

export default ListadoProductosGestor;
