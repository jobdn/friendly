import React from "react";
import { Link } from "react-router-dom";

import { RegistrationForm } from "@components/RegistrationForm";

export const RegisterPage: React.FC = () => {
  return (
    <div className="page page_center">
      <div className="page__header">
        <h1>Create an account</h1>
      </div>

      <RegistrationForm />

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
