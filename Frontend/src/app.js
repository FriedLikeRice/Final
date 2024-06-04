import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import CreateCardSet from './components/CreateCardSet';
import CardSetList from './components/CardSetList';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <h1>Flashcard App</h1>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <PrivateRoute path="/flashcards">
              <FlashcardList />
            </PrivateRoute>
            <PrivateRoute path="/create-cardset">
              <CreateCardSet />
            </PrivateRoute>
            <PrivateRoute path="/cardsets">
              <CardSetList />
            </PrivateRoute>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
