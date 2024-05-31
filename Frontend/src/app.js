import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch('/api/flashcards')
      .then((response) => response.json())
      .then((data) => setFlashcards(data))
      .catch((error) => console.error('Error fetching flashcards:', error));
  }, []);

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;