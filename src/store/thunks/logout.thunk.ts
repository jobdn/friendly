import { createAsyncThunk } from "@reduxjs/toolkit";

import { AvailableToken } from "@models/http";
import { AuthService } from "@services/AuthService";

export const logoutThunk = createAsyncThunk<
  void,
  void,
  {
    rejectValue: { message: string };
  }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await AuthService.logout();
    localStorage.removeItem(AvailableToken.ACCESS);
  } catch (error) {
    return rejectWithValue({ message: "Something went wrong when logout" });
  }
});
