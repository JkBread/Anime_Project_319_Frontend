import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import axios from "axios";


const BASE_URL = "http://localhost:3030";

export const baseInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

baseInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    
    const correctPath: boolean = config.url !== "/login";
    if (localStorage.getItem("accessToken") !== "" && correctPath) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

export default baseInstance;