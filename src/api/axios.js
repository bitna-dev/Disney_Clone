import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "86655af07785cb2948bfbd9293d9d5e9",
        language: "ko-KR"
    }
});


export default instance;