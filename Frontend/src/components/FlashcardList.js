import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

const fetchCardSets = async () => {
  const { data } = await axios.get('/api/cardsets', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return data;
};

const fetchFlashcards = async () => {
  const { data } = await axios.get('/api/flashcards', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return data;
};

const createCardSet = async (newCardSet) => {
  const { data } = await axios.post('/api/cardsets', newCardSet, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return data;
};

const CardSetList = ({ cardSets }) => (
  <div>
    <h2>Card Sets</h2>
    <ul>
      {cardSets.map((cardSet) => (
        <li key={cardSet._id}>{cardSet.name}</li>
      ))}
    </ul>
  </div>
);

const FlashcardList = ({ flashcards }) => (
  <div>
    <h2>Flashcards</h2>
    <ul>
      {flashcards.map((flashcard) => (
        <li key={flashcard._id}>{flashcard.front}</li>
      ))}
    </ul>
  </div>
);

const CreateCardSet = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Card Set</button>
    </form>
  );
};

const Dashboard = () => {
  const queryClient = useQueryClient();

  const {
    data: cardSets,
    error: cardSetsError,
    isLoading: cardSetsLoading
  } = useQuery('cardSets', fetchCardSets);

  const {
    data: flashcards,
    error: flashcardsError,
    isLoading: flashcardsLoading
  } = useQuery('flashcards', fetchFlashcards);

  const mutation = useMutation(createCardSet, {
    onSuccess: () => {
      queryClient.invalidateQueries('cardSets');
    },
    onError: (error) => {
      alert(error.response?.data?.message || 'Error creating card set');
    }
  });

  const handleCreateCardSet = (newCardSet) => {
    mutation.mutate(newCardSet);
  };

  if (cardSetsLoading || flashcardsLoading) return;
  if (cardSetsError) return;
  if (flashcardsError) return;

  return (
    <div>
      <CreateCardSet onCreate={handleCreateCardSet} />
      <CardSetList cardSets={cardSets} />
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

const queryClient = new QueryClient(); // Create a QueryClient instance

const App = () => (
  <QueryClientProvider client={queryClient}> {/* Wrap the component tree with QueryClientProvider */}
    <Dashboard />
  </QueryClientProvider>
);

export default App;