import React, {useEffect, useState} from 'react';

import css from './Post.module.css'
import {postsService} from "../../services/postsService";
const Post = ({postId}) => {

    const [post, setPost] = useState({});
    const {userId, id, title, body} = post

    useEffect(() => {
        postsService.getByCommentID(postId).then(({data})=> setPost(data))
    }, [postId])


    return (
        <div className={css.Post}>
            POST
            <p>userId:{userId}</p>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Post;