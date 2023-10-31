import {axiosService} from "./axiosService";

import {urls} from "../consts/urls";

const userService = {
    getAll: () => axiosService.get(urls.users.users),
    getDetailsByID: (userID) => axiosService.get(urls.users.getUserDetailsByID(userID))
}

export {userService}