import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            {user ? (
                <div>
                    <span>Welcome, {user.username}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <span></span>
            )}
        </nav>
    );
};

export default Navbar;