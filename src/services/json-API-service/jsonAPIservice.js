import axios from "axios";
import {jsonAPI, urls} from "../../consts/urls";

const axiosService = axios.create({baseURL: jsonAPI})

const jsonAPIservice = {
    createUser: (user) => axiosService.post(urls.users, user),
    createComment: (comment) => axiosService.post(urls.comments, comment),
    getUsers: () => axiosService.get(urls.users),
    getComments: () => axiosService.get(urls.comments)
}

export {jsonAPIservice}