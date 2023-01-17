import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AvailableToken } from "@models/http";
import { User } from "@models/User";

import { checkAuthThunk } from "../thunks/checkAuth.thunk";
import { logoutThunk } from "../thunks/logout.thunk";
import { loginThunk } from "../thunks/login.thunk";
import { registerThunk } from "../thunks/register.thunk";

type AvailableAuthStateStatus = "error" | "loading" | "init" | "success";

interface AuthState {
  user: User;
  isAuth: boolean;
  status: AvailableAuthStateStatus;
}

const userIsAuth = localStorage.getItem(AvailableToken.ACCESS) ? true : false;

const initialState: AuthState = {
  user: {} as User,
  isAuth: userIsAuth,
  status: "init",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    // login
    builder.addCase(loginThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<{ user: User; accessToken: string }>) => {
        state.status = "success";
        state.isAuth = true;
        state.user = action.payload.user;
      }
    );
    builder.addCase(loginThunk.rejected, (state) => {
      state.status = "error";
    });

    // logout
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = {} as User;
      state.status = "success";
      state.isAuth = false;
    });

    // register
    builder.addCase(registerThunk.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(
      registerThunk.fulfilled,
      (state, action: PayloadAction<{ user: User; accessToken: string }>) => {
        state.status = "success";
        state.isAuth = true;
        state.user = action.payload.user;
      }
    );
    builder.addCase(registerThunk.rejected, (state) => {
      state.status = "error";
    });

    // refresh
    builder.addCase(checkAuthThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      checkAuthThunk.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.isAuth = true;
        state.status = "success";
        state.user = action.payload;
      }
    );

    builder.addCase(checkAuthThunk.rejected, (state) => {
      state.isAuth = false;
      state.status = "error";
    });
  },
});

export const userReducer = authSlice.reducer;
