import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

instance.interceptors.response.use(
    response => response,
    error => {
        console.error('Error en la petición:', error.response?.data || error);
        return Promise.reject(error.response?.data || error);
    }
);

export default instance;
