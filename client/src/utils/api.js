

// Function to fetch logged-in user's information
export const getMe = async (token) => {
    try {
        const response = await fetch('/api/users/me', {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw new Error('Failed to fetch user info');
    }
};

// Function to create a new user
export const createUser = async (userData) => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
};

// Function to log in a user
export const loginUser = async (userData) => {
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Failed to log in');
    }
};

// Function to save subject data for a logged-in user
export const saveSubject = async (subjectData, token) => {
    try {
        const response = await fetch('/api/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(subjectData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error saving subject:', error);
        throw new Error('Failed to save subject');
    }
};

// Function to delete subject data for a logged-in user
export const deleteSubject = async (SubjectId, token) => {
    try {
        const response = await fetch(`/api/users/Subjects/${SubjectId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting subject:', error);
        throw new Error('Failed to delete subject');
    }
};