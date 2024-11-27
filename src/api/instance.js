import axios from 'axios';

const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

const axiosInstance = axios.create({
    baseURL: 'https://test.gmnlab.com/api',
    headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export { axiosInstance };
