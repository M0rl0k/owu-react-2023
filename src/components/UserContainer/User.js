import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {

    const navigate = useNavigate();

    const {id, name, username, email, phone} = user

    return (
        <div className={css.User}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <button onClick={() => navigate(`${id}`)} >Get details</button>
        </div>
    );
};

export default User;