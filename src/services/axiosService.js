import axios from "axios";

import {baseURL} from "../consts/urls";

const axiosService = axios.create({baseURL});

export {axiosService}