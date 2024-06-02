import React, { useState, useEffect } from 'react';

function CardSetList() {
  const [cardSets, setCardSets] = useState([]);

  useEffect(() => {
    fetch('/api/cardsets')
      .then(response => response.json())
      .then(data => setCardSets(data))
      .catch(error => console.error('Error fetching card sets:', error));
  }, []);

  return (
    <div>
      <h2>Card Sets</h2>
      <ul>
        {cardSets.map(cardSet => (
          <li key={cardSet._id}>
            <h3>{cardSet.name}</h3>
            <p>{cardSet.description}</p>
            <p>Flashcards: {cardSet.flashcards.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardSetList;
