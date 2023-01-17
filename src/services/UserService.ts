import { AxiosResponse } from "axios";

import { UsersResponse } from "@models/response/UserResponse";

import backend from "../http";

export class UserService {
  static async getUsers(): Promise<AxiosResponse<UsersResponse>> {
    return await backend.get<UsersResponse>("/users");
  }
}
