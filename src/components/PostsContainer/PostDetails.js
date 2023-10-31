import React from 'react';

const PostDetails = ({post}) => {

    const {userId, id, title, body} = post

    return (
        <div>
            <p>Made by user ID: {userId}</p>
            <p>Post id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetails;