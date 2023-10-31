import React from 'react';

import User from "./User";
import css from './Users.module.css'

const Users = ({users}) => {


    return (
        <div className={css.Users}>
            <h2>Users list</h2>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;