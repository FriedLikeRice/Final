import React, { useState, useEffect } from 'react';

const Math = () => {
    // State to manage quiz questions
    const [quizQuestions, setQuizQuestions] = useState([]);
    // State to manage error
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch math quiz questions from the server
        const fetchQuizQuestions = async () => {
            try {
                const response = await fetch('/api/math/quiz');
                if (!response.ok) {
                    throw new Error('Failed to fetch quiz questions');
                }
                const data = await response.json();
                setQuizQuestions(data);
            } catch (error) {
                setError(error.message);
            }
        };

        // Call the fetchQuizQuestions function
        fetchQuizQuestions();
    }, []); // Run this effect only once when the component mounts

    return (
        <div>
            <h2>Math Quiz</h2>
            {error && <p>Error: {error}</p>}
            <ol>
                {quizQuestions.map((question, index) => (
                    <li key={index}>
                        <p>Question: {question.question}</p>
                        <p>Options: {question.options.join(', ')}</p>
                        {/* You can add input fields for user answers here */}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Math;