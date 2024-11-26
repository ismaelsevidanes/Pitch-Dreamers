import React, { useState } from 'react';
import authService from '../../services/authService';
//import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await authService.register(name, email, password, passwordConfirmation);
            alert('User registered successfully');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            alert('Error registering user: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
