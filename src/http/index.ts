import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

import { AvailableToken } from "@models/http";
import { AuthResponse } from "@models/response/AuthResponse";

import { API_URL } from "../constants/http.constants";

const backend = axios.create({
  baseURL: "https://fo-api.vercel.app",
  withCredentials: true,
});

backend.interceptors.request.use((config: AxiosRequestConfig) => {
  const headers = config.headers as RawAxiosRequestHeaders;
  headers.Authorization = `Bearer ${localStorage.getItem(
    AvailableToken.ACCESS
  )}`;
  return config;
});

backend.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          API_URL + "/auth/refresh",
          {
            withCredentials: true,
          }
        );
        localStorage.setItem(AvailableToken.ACCESS, response.data.accessToken);
        return backend.request(originalRequest);
      } catch (error) {}
    }

    throw error;
  }
);

export default backend;
