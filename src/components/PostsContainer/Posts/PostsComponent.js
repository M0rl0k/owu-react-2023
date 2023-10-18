import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/PostService/PostService";

import css from './Posts.module.css'
import PostComponent from "../Post/PostComponent";
import PostDetailsComponent from "../Post/PostDetailsComponent";

const PostsComponent = () => {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null)

    useEffect(()=>{
        postService.getAllPosts().then(({data}) => setPosts(data))
    }, [])

    const click = async (id) => {
        const {data} = await postService.getPostDetails(id)
        setPostDetails(data)
    }



    return (
        <div className={css.Posts}>
            {postDetails ? <PostDetailsComponent postDetails={postDetails}/> : null}
            {posts.map(post => <PostComponent key={post.id} post={post} click={click}/>)}
        </div>
    );
};

export default PostsComponent;