import React from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";

import { Layout } from "@components/Layout";
import { HomePage } from "@pages//home";
import { LoginPage } from "@pages/login";
import { UsersPage } from "@pages/users";
import { RegisterPage } from "@pages/register";
import { checkAuthThunk } from "@store/thunks/checkAuth.thunk";

import { useAppDispatch, useAppSelector } from "./hooks";

export const RequireAuth: React.FC = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export const Router = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.isAuth);

  React.useLayoutEffect(() => {
    function checkAuthOnFirstRender() {
      if (isAuth) {
        dispatch(checkAuthThunk());
      }
    }

    checkAuthOnFirstRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </Route>

      {/* public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<h1>Empty page 💥</h1>} />
    </Routes>
  );
};
