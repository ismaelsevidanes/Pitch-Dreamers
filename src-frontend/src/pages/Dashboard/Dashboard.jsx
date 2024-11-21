import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import ProductTable from '../../components/ProductTable/ProductTable';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ProductTable />
      </div>
    </div>
  );
};

export default Dashboard;
