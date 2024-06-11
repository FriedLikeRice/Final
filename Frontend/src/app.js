import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider from context

function App() {
  const queryClient = new QueryClient(); // Create a QueryClient instance

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}> {/* Wrap the entire application with QueryClientProvider */}
        <Router>
          <div>
            <Navbar />

            <div className="App">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;