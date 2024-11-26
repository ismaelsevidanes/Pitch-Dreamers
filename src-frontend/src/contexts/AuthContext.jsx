import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../services/axiosConfig';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        setLoading(false);
        return;
      }

      const userData = JSON.parse(storedUser);
      if (!userData.access_token) {
        localStorage.removeItem('user');
        setLoading(false);
        return;
      }

      const response = await axios.get('/api/user');
      setUser(response.data);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      localStorage.removeItem('user');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
