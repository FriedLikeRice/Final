import React, { useState, useEffect } from 'react';

function FlashcardList() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch('/api/flashcards')
      .then(response => response.json())
      .then(data => setFlashcards(data))
      .catch(error => console.error('Error fetching flashcards:', error));
  }, []);

  return (
    <div>
      <h2>Flashcards</h2>
      <ul>
        {flashcards.map(flashcard => (
          <li key={flashcard._id}>
            <p>Front: {flashcard.front}</p>
            <p>Back: {flashcard.back}</p>
            <p>Category: {flashcard.category}</p>
            <p>Difficulty: {flashcard.difficulty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlashcardList;
