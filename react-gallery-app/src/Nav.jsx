import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/cats">Cats</NavLink></li>
                <li><NavLink to="/dods">Dogs</NavLink></li>
                <li><NavLink to="/computers">Computers</NavLink></li>
            </ul>
        </nav>
    );
};


export default Nav;