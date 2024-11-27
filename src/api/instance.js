import axios from 'axios';

const AUTH_TOKEN = 'aSvEHaczt4YQktU00uvF'

const axiosInstance = axios.create({
    baseURL: 'https://test.gmnlab.com/api',
    headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export { axiosInstance };
