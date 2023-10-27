import {axiosService} from "./axiosService";
import {urls} from "../consts/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}

export {commentsService}