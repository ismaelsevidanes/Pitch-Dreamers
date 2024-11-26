// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

// Nuevo componente ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

const AppRoutes = () => {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Rutas protegidas */}
              <Route
                  path="/dashboard"
                  element={
                      <ProtectedRoute>
                          <Dashboard />
                      </ProtectedRoute>
                  }
              />
              <Route
                  path="/"
                  element={
                      <ProtectedRoute>
                          <Dashboard />
                      </ProtectedRoute>
                  }
              />
          </Routes>
      </Router>
  );
};

export default AppRoutes;
