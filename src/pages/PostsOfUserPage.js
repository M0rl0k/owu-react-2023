import React from 'react';
import {Outlet, useLoaderData, useParams} from "react-router-dom";

import Posts from "../components/PostsContainer/Posts";

const PostsOfUserPage = () => {

    const {data} = useLoaderData()
    const {userID} = useParams()
    console.log(userID)

    return (
        <div>
            <h2>Posts of user ID: {userID}</h2>
            <Posts posts={data}/>
            <Outlet/>
        </div>
    );
};

export default PostsOfUserPage;