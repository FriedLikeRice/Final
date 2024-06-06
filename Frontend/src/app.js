import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FlashcardList from './components/FlashcardList';
import CardSetList from './components/CardSetList';
import CreateCardSet from './components/CreateCardSet';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <h1>Flashcard App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <PrivateRoute path="/register" component={Register} />
          <PrivateRoute path="/login" component={Login} />
          <PrivateRoute path="/flashcards" component={FlashcardList} />
          <PrivateRoute path="/cardsets" component={CardSetList} />
          <PrivateRoute path="/create" component={CreateCardSet} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
