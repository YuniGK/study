import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
});

api.interceptors.request.use(function (config) {
return config;
}, function (error) {
return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
return response;
}, function (error) {
return Promise.reject(error);
});

export default api;