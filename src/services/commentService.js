import {axiosService} from "./axiosService";

import {urls} from "../consts/urls";

const commentService = {
    getCommentsByPostID: (postID) => axiosService.get(urls.comments.getCommentsByPostID(postID))
}

export {commentService}