import {axiosService} from "./axiosService";
import {urls} from "../consts/urls";

const postsService = {
    getByCommentID: (commentPostId) => axiosService.get(`${urls.posts}/${commentPostId}`)
}

export {postsService}