import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { AuthProvider } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
