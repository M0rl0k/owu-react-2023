import React from 'react';
import {useForm} from "react-hook-form";
import {jsonAPIservice} from "../../../services/json-API-service/jsonAPIservice";

const CommentFormComponent = ({setComments}) => {
    const {handleSubmit, register, reset} = useForm()

    const send = async (comment) => {
        const {data} = await jsonAPIservice.createComment(comment)
        setComments(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(send)}>
            <h2>Comment Form </h2>
            <br/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Send</button>
        </form>
    );
};

export default CommentFormComponent;