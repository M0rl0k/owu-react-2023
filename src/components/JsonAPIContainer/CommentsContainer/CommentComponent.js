import React from 'react';

const CommentComponent = ({comment}) => {
    const {id, email, body, name} = comment

    return (
        <div style={{width:'250px', border:'2px solid gray'}}>
            <h3>id: {id}</h3>
            <h3>email: {email}</h3>
            <h3>body: {body}</h3>
            <h3>name: {name}</h3>
        </div>
    );
};

export default CommentComponent;