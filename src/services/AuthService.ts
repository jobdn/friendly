import axios, { AxiosResponse } from "axios";

import { AuthResponse } from "@models/response/AuthResponse";

import backend from "../http";
import { API_URL } from "../constants/http.constants";

export class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return await backend.post<AuthResponse>("/auth/login", { email, password });
  }

  static async register(
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return await backend.post<AuthResponse>("/auth/registration", {
      name,
      email,
      password,
    });
  }

  static async logout() {
    return await backend.post("/auth/logout");
  }

  static async refresh() {
    return axios.get<AuthResponse>(API_URL + "/auth/refresh", {
      withCredentials: true,
    });
  }
}
