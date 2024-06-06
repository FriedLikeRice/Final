import React from 'react';
import FlashcardList from './FlashcardList';
import CardSetList from './CardSetList';
import CreateCardSet from './CreateCardSet';
import PrivateRoute from './PrivateRoute';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            {<PrivateRoute component={FlashcardList} />}
            {<PrivateRoute component={CardSetList} />}
            {<PrivateRoute component={CreateCardSet} />}
        </div>
    );
};

export default Home;