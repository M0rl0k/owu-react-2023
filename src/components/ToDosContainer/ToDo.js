import React from 'react';

import css from './ToDo.module.css'

const ToDo = ({toDo}) => {
    const {id, userId, title, completed} = toDo

    return (
        <div className={css.ToDo}>
            <p>id:{id}</p>
            <p>userId:{userId}</p>
            <p>title:{title}</p>
            <p>completed:{completed.toString()}</p>
        </div>
    );
};

export default ToDo;