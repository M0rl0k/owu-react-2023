import React from 'react';

import css from './Post.module.css'

const PostComponent = ({post, click}) => {

    const {id, title} = post;

    return (
        <div className={css.Post}>
            <h2>ID: {id}</h2>
            <h3>Title: {title}</h3>
            <button onClick={() => click(id)}>Details</button>
        </div>
    );
};

export default PostComponent;