import { createAsyncThunk } from "@reduxjs/toolkit";

import { User } from "@models/User";
import { UserService } from "@services/UserService";

export const usersThunk = createAsyncThunk<
  User[],
  void,
  { rejectValue: { message: string } }
>("users", async (_, { rejectWithValue }) => {
  try {
    const response = await UserService.getUsers();
    return response.data.users;
  } catch (error) {
    console.error(error);
    return rejectWithValue({ message: "Error while user fetching." });
  }
});
