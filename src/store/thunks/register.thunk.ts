import { createAsyncThunk } from "@reduxjs/toolkit";

import { User } from "@models/User";
import { AvailableToken } from "@models/http";
import { AuthService } from "@services/AuthService";

export const registerThunk = createAsyncThunk<
  { user: User; accessToken: string },
  { name: string; email: string; password: string }
>("user/register", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.register(name, email, password);

    localStorage.setItem(AvailableToken.ACCESS, response.data.accessToken);

    return {
      user: response.data.user,
      accessToken: response.data.accessToken,
    };
  } catch (error) {
    console.error(error);
    return rejectWithValue({ error });
  }
});
