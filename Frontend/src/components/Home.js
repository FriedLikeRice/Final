import { QueryClient, QueryClientProvider } from 'react-query';
import CardSetList from './CardSetList';
import FlashcardList from './FlashcardList';
import CreateCardSet from './CreateCardSet';


const Home = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="home-container">
                <h1 className="home-heading">Flashcard App</h1>
                <div className="home-content">
                    <div className="home-section">
                        <h2 className="home-section-heading">Card Sets</h2>
                        <CardSetList />
                    </div>
                    <div className="home-section">
                        <h2 className="home-section-heading">Flashcards</h2>
                        <FlashcardList />
                    </div>
                    <div className="home-section">
                        <h2 className="home-section-heading">Create New Card Set</h2>
                        <CreateCardSet />
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default Home;