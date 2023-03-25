import {default as Axios} from 'axios';

export const axios = Axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: false
})