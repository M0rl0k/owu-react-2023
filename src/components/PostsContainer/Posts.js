import React from 'react';

import Post from "./Post";

const Posts = ({posts}) => {

    console.log(posts)

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;