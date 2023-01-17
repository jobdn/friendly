import React from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "@components/LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <div className="page page_center">
      <div className="page__header">
        <h1>Hi, Welcome Back! 👋</h1>
      </div>

      <LoginForm />

      <p>
        Don’t have an account ? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};
