import React from 'react';

import css from './Comment.module.css'
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate()

    return (
        <div className={css.Comment}>
            <p>id:{id}</p>
            <p>postId:{postId}</p>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>body:{body}</p>
            <button onClick={() => navigate('post', {state: postId})}>Show Post</button>
        </div>
    );
};

export default Comment;