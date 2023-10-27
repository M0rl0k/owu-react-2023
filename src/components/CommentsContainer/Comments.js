import React, {useEffect, useState} from 'react';

import css from './Comments.module.css'
import {commentsService} from "../../services/commentsService";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data})=> setComments(data))
    }, [])

    return (
        <div className={css.Comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default Comments;