import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { User } from "@models/User";
import { AvailableToken } from "@models/http";
import { AuthService } from "@services/AuthService";

export const loginThunk = createAsyncThunk<
  { user: User; accessToken: string },
  { email: string; password: string },
  { rejectValue: AxiosError }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(email, password);

    localStorage.setItem(AvailableToken.ACCESS, response.data.accessToken);

    return {
      user: response.data.user,
      accessToken: response.data.accessToken,
    };
  } catch (error) {
    const typedError = error as AxiosError;

    return rejectWithValue(typedError);
  }
});
