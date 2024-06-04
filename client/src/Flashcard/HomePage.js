import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Homepage = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/loginform');
    };
    return (
        <div>

            <h1>Please make sure to login before you proceed</h1>

            <h2>Login or Sign Up</h2>

            <SignupForm onClick={handleNavigateToContactMePage} />
            <LoginForm />

        </div>
    );
};

export default Homepage;