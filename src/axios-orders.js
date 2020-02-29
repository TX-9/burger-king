import axios from 'axios';

const instance = axios.create({
    baseURL: "https://j-burger-king.firebaseio.com/"
});

export default instance;