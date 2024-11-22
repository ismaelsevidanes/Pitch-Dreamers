import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const register = (name, email, password, password_confirmation) => {
    return axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
        password_confirmation
    });
};

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        password
    });
    if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
    return axios.post(`${API_URL}/logout`);
};

const authService = {
    register,
    login,
    logout
};

export default authService;