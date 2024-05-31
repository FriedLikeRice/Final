import React, { useState, useEffect } from 'react';

const Science = () => {
    // State to manage scientific concepts
    const [concepts, setConcepts] = useState([]);
    // State to manage error
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch scientific concepts from the server
        const fetchConcepts = async () => {
            try {
                const response = await fetch('/api/science/concepts');
                if (!response.ok) {
                    throw new Error('Failed to fetch scientific concepts');
                }
                const data = await response.json();
                setConcepts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        // Call the fetchConcepts function
        fetchConcepts();
    }, []); // Run this effect only once when the component mounts

    return (
        <div>
            <h2>Science Concepts</h2>
            {error && <p>Error: {error}</p>}
            <ul>
                {concepts.map((concept, index) => (
                    <li key={index}>{concept}</li>
                ))}
            </ul>
        </div>
    );
};

export default Science;