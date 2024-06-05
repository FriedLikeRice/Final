import React, { useState } from "react";

import { Link } from "react-router-dom";

const data = [
    {
        label: 'HOME',
        to: "/"
    }



];

const Navigation = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className="navbar">

                <ul className={`nav-links ${toggleIcon ? 'active' : ''}`}>
                    {data.map(item => (
                        <li key={item.to}>
                            <Link to={item.to} onClick={handleToggleIcon}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </div>
    );
};

export default Navigation;