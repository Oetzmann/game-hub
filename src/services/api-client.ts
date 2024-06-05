import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {        
        key: 'e43b6f7ab8654ca4a24b3733fa4bf7b9'
    }
})