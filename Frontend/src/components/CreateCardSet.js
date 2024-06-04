import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const createCardSet = async (newCardSet) => {
  const { data } = await axios.post('/api/cardsets', newCardSet, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return data;
};

const CreateCardSet = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation(createCardSet, {
    onSuccess: () => {
      queryClient.invalidateQueries('cardSets');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, description });
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

export default CreateCardSet;
