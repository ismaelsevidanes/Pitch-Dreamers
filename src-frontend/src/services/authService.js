import axios from './axiosConfig';

const register = async (name, email, password, password_confirmation) => {
  try {
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.post('/api/register', {
          name,
          email,
          password,
          password_confirmation
      });
      if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
  } catch (error) {
      console.error('Error en registro:', error.response?.data || error.message);
      throw error;
  }
};

const login = async (email, password) => {
    try {
        await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/api/login', {
            email,
            password
        });

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error('Error en login:', error.response?.data || error.message);
        throw error;
    }
};

const logout = async () => {
    await axios.get('/sanctum/csrf-cookie');
    localStorage.removeItem('user');
    return axios.post('/api/logout');
};

const authService = {
    register,
    login,
    logout
};

export default authService;
