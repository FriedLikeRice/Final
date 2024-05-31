import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const History = () => {
    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFacts = async () => {
            try {
                const response = await fetch('/api/history/facts');
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} - ${errorText}`);
                }

                const contentType = response.headers.get('Content-Type');
                if (!contentType || !contentType.includes('application/json')) {
                    const errorText = await response.text();
                    throw new Error(`Expected JSON, received ${contentType}: ${errorText}`);
                }

                const data = await response.json();
                setFacts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFacts();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Historical Facts</h2>
            {loading && <p>Loading...</p>}
            {error && <div className="alert alert-danger">Error: {error}</div>}
            {!loading && !error && (
                <ul className="list-group">
                    {facts.map((fact, index) => (
                        <li key={index} className="list-group-item">
                            {fact}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default History;