import React, {useEffect, useState} from 'react';

import css from './ToDos.module.css'
import {toDoService} from "../../services/toDoService";
import ToDo from "./ToDo";
const ToDos = () => {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        toDoService.getAll().then(({data})=> setToDos(data))
    }, [])

    return (
        <div className={css.ToDos}>
            {toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo}/> )}
        </div>
    );
};

export default ToDos;