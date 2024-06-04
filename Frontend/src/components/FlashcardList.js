import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchFlashcards = async () => {
  const { data } = await axios.get('/api/flashcards', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return data;
};

const FlashcardList = () => {
  const { data, error, isLoading } = useQuery('flashcards', fetchFlashcards);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching flashcards</div>;

  return (
    <div>
      <h2>Flashcards</h2>
      <ul>
        {data.map((flashcard) => (
          <li key={flashcard._id}>{flashcard.front}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
