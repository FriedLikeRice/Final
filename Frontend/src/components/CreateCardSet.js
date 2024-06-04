import React, { useState } from 'react';

function CreateCardSet() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCardSet = { name, description };
    
    try {
      const response = await fetch('/api/cardsets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCardSet)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Created new card set:', result);
      } else {
        console.error('Failed to create card set');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Set Name:</label>
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
        />
      </div>
      <button type="submit">Create Card Set</button>
    </form>
  );
}

export default CreateCardSet;
