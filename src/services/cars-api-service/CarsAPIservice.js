import axios from "axios";
import {carsAPI, urls} from "../../consts/urls";

const axiosService = axios.create({baseURL: carsAPI})

const carsAPIservice = {
    getAll: () => axiosService.get(urls.cars),
    deleteByID: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateByID: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    createCar: (car) => axiosService.post(urls.cars, car)
}

export {carsAPIservice}