import React, {useEffect, useState} from 'react';

import CommentFormComponent from "./CommentFormComponent";
import {jsonAPIservice} from "../../../services/json-API-service/jsonAPIservice";
import CommentsComponent from "./CommentsComponent";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        jsonAPIservice.getComments().then(({data}) => setComments(data))
    }, [])

    return (
        <>
            <CommentFormComponent setComments={setComments}/>
            <CommentsComponent comments={comments}/>
        </>
    );
};

export default CommentsContainer;