import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://mbianoubradon-portfolio.onrender.com/api"
    }
);

export default instance;