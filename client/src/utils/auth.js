// use this to decode a token and get the user's information out of it
// import decode from 'jwt-decode';
import React, { useState } from 'react';
import { loginUser, createUser } from '../utils/api';

// create a new class to instantiate for a user
const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            // Call loginUser function to authenticate user
            const userData = { email, password };
            const response = await loginUser(userData);
            // Handle successful login (e.g., redirect to dashboard)
            console.log('Login successful', response);
        } catch (error) {
            // Handle login error
            setError('Invalid email or password');
        }
    };

    const handleRegister = async () => {
        try {
            // Call createUser function to register new user
            const userData = { email, password };
            const response = await createUser(userData);
            // Handle successful registration (e.g., show success message)
            console.log('Registration successful', response);
        } catch (error) {
            // Handle registration error
            setError('Registration failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Auth;