import {axiosService} from "./axiosService";

import {urls} from "../consts/urls";

const postService = {
    getPostsByUserID: (userID) => axiosService.get(urls.posts.getPostsByUserID(userID)),
    getPostDetailsByID: (postID) => axiosService.get(urls.posts.getPostDetailsByID(postID))
}

export {postService}