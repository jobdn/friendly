import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@models/User";

import { usersThunk } from "../thunks/users.thunk";

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: { users: [] as User[] },
  reducers: {},
  extraReducers: (builder) => {
    // TODO: make reducers for pending and rejected
    builder.addCase(
      usersThunk.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      }
    );
  },
});

export const allUsersReducer = allUsersSlice.reducer;
