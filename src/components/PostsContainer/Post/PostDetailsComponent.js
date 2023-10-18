import React from 'react';

import css from './PostDetails.module.css'

const PostDetailsComponent = ({postDetails}) => {
    const {id, title, userId, body} = postDetails;

    return (
        <div className={css.PostDetails}>
            <h2>ID: {id} User ID: {userId}</h2>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetailsComponent;