import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCardSets = async () => {
  const { data } = await axios.get('/api/cardsets', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return data;
};

const CardSetList = () => {
  const { data, error, isLoading } = useQuery('cardSets', fetchCardSets);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching card sets</div>;

  return (
    <div>
      <h2>Card Sets</h2>
      <ul>
        {data.map((cardSet) => (
          <li key={cardSet._id}>{cardSet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardSetList;
