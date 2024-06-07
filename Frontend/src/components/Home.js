import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClientProvider
import CardSetList from './CardSetList';
import FlashcardList from './FlashcardList';
import CreateCardSet from './CreateCardSet';

const Home = () => {
    const queryClient = new QueryClient(); // Create a QueryClient instance

    return (
        <QueryClientProvider client={queryClient}> {/* Wrap the component tree with QueryClientProvider */}
            <div>
                <CardSetList />
                <FlashcardList />
                <CreateCardSet />
            </div>
        </QueryClientProvider>
    );
};

export default Home;