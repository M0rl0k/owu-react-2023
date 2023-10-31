import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Post.module.css'

const Post = ({post}) => {

    const {title, id} = post

    const navigate = useNavigate()

    return (
        <div className={css.Post}>
            <h4 className={css.heading}>Title: {title}</h4>
            <button onClick={() => navigate(`${id}`)}>Get Post details</button>
        </div>
    );
};

export default Post;