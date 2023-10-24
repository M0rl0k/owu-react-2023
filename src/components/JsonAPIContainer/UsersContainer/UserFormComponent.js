import React from 'react';
import {useForm} from "react-hook-form";
import {jsonAPIservice} from "../../../services/json-API-service/jsonAPIservice";

const UserFormComponent = ({setUsers}) => {
    const {handleSubmit,register, reset} = useForm()

    const send = async (user) => {
        const {data} = await jsonAPIservice.createUser(user);
        setUsers(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(send)}>
            <h2>User Form</h2>
            <br/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'website'} {...register('website')}/>
            <button>send</button>
        </form>
    );
};

export default UserFormComponent;