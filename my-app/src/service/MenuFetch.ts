import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});