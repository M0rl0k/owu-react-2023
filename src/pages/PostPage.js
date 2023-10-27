import React from 'react';
import Post from "../components/PostContainer/Post";
import {useLocation} from "react-router-dom";

const PostPage = () => {

    const {state: postId} = useLocation()

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
            <Post postId={postId}/>
        </div>
    );
};

export default PostPage;