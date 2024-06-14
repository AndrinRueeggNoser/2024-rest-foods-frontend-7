import axios, { Axios, AxiosInstance } from "axios";

export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});