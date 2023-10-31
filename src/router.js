import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import {userService} from "./services/userService";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostsOfUserPage from "./pages/PostsOfUserPage";
import {postService} from "./services/postService";
import PostDetailsPage from "./pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element:<Navigate to={'users'}/>
            },
            {
                path: 'users',
                element: <UsersPage/>,
                loader: () => userService.getAll(),
                children: [
                    {
                        path:':userID',
                        element: <UserDetailsPage/>,
                        loader: ({params:{userID}}) => userService.getDetailsByID(userID)
                    }]
            },
            {
                path: 'users/:userID/posts',
                element: <PostsOfUserPage/>,
                loader: ({params:{userID}}) => postService.getPostsByUserID(userID)
            },
            {
                path: 'users/:userID/posts/:postID',
                element: <PostDetailsPage/>,
                loader: ({params:{postID}}) => postService.getPostDetailsByID(postID),
            }

        ]
    }
])

export {router}