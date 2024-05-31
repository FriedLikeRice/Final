import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import AppNavbar from './components/Navbar';
import Subject from './Flashcard/Subject';
import Homepage from './Flashcard/HomePage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/signupform" element={<SignupForm />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;