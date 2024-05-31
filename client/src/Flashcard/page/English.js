import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const English = () => {
    const [sentence, setSentence] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await fetch('/api/english/grammar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sentence })
            });

            if (!res.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await res.json();
            setResponse(data.message);
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2>English Component</h2>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="form-group">
                    <label htmlFor="sentence">Enter a sentence:</label>
                    <input
                        type="text"
                        id="sentence"
                        className="form-control"
                        value={sentence}
                        onChange={(e) => setSentence(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
                    {loading ? 'Checking...' : 'Check Grammar'}
                </button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
            {response && <div className="alert alert-success">Response: {response}</div>}
        </div>
    );
};

export default English;