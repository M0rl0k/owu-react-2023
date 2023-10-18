import axios from "axios";



const baseURL = 'https://jsonplaceholder.typicode.com/';
const postsURL = '/posts'

const axiosInstance = axios.create({baseURL});

const postService = {
    getAllPosts: () => axiosInstance.get(postsURL),
    getPostDetails: (id) => axiosInstance.get(`${postsURL}/${id}`)
}

export {postService}