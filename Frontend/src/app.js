import React from 'react';
import FlashcardList from './components/FlashcardList';
import CreateCardSet from './components/CreateCardSet';
import CardSetList from './components/CardSetList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <CreateCardSet />
      <CardSetList />
      <FlashcardList />
    </div>
  );
}

export default App;
