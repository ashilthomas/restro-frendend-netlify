import axios from "axios";

const instance = axios.create({
    baseURL : "https://restro-backend-4rd8.onrender.com/"
})

export default instance;