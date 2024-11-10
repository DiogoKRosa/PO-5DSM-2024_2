// src/api.ts
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://35.173.235.57:8080', // Substitua com a URL base da sua API
    timeout: 10000, // Tempo limite para requisições (opcional)
});

export default api;
