import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../services/commentService";
import Comments from "../components/CommentContainer/Comments";

const CommentsOfPostPage = () => {

    const [comments, setComments] = useState([])

    const {postID} = useParams()

    useEffect(() => {
        commentService.getCommentsByPostID(postID).then(({data}) => setComments(data))
    }, [postID])

    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsOfPostPage;