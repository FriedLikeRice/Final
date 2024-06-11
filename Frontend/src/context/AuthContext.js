import axios from 'axios';
import React, { createContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct named import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await axios.post('/auth/login', { username, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      // Decode the token to get user info
      const decoded = jwtDecode(token); // Correct usage
      setUser(decoded.user);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const register = async (name, username, password) => {
    try {
      const res = await axios.post('/auth/register', { name, username, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      // Decode the token to get user info
      const decoded = jwtDecode(token); // Correct usage
      setUser(decoded.user);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};