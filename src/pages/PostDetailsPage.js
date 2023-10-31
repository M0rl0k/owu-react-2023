import React from 'react';
import {useLoaderData} from "react-router-dom";

import PostDetails from "../components/PostsContainer/PostDetails";
import CommentsOfPostPage from "./CommentsOfPostPage";

const PostDetailsPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <PostDetails post={data}/>
            <h2>Comments of current post</h2>
            <CommentsOfPostPage/>
        </div>
    );
};

export default PostDetailsPage;