import {axiosService} from "./axiosService";
import {urls} from "../consts/urls";

const toDoService = {
    getAll: () => axiosService.get(urls.todos)
}

export {toDoService}