import React from 'react';
import CommentComponent from "./CommentComponent";

const CommentsComponent = ({comments}) => {
    return (
        <div style={{display:'flex', flexFlow: 'wrap'}}>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;