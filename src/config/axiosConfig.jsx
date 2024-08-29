import axios from 'axios';

const axiosClient = axios.create({
    // baseURL: "http://192.10.10.182:5555"
    baseURL: "http://catedral.scavonehnos.com.py:5555"
});

export default axiosClient;