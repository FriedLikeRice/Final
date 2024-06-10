import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClientProvider
import CardSetList from './CardSetList';
import FlashcardList from './FlashcardList';
import CreateCardSet from './CreateCardSet';

const Home = () => {
    const queryClient = new QueryClient(); 

    return (
        <QueryClientProvider client={queryClient}> 
            <div>
                <CardSetList />
                <FlashcardList />
                <CreateCardSet />
            </div>
        </QueryClientProvider>
    );
};

export default Home;