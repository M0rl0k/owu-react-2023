import {axiosService} from "./axiosService";
import {urls} from "../consts/urls";

const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}

export { albumsService }