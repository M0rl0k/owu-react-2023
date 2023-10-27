import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className={css.Header}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'todos'}>To Dos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </nav>
    );
};

export default Header;