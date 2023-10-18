import axios from "axios";

const baseURL = 'https://api.spacexdata.com/v3/launches/';

const axiosInstance = axios.create({baseURL});

const rocketService = {
    getLaunches: () => axiosInstance.get()
}

export {rocketService}