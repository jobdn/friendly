import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "@components/Form";
import { Input } from "@components/Input";
import { AvailableLoginFormFieldsId } from "@models/form-fields";
import { loginThunk } from "@store/thunks/login.thunk";

// TODO: change ../../hooks to @hooks
import { useAppDispatch, useAppSelector } from "../../hooks";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.user.status);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("", process.env.NODE_ENV);

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.id === AvailableLoginFormFieldsId.EMAIL) {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const loading = React.useMemo(() => status === "loading", [status]);

  return (
    <Form onSubmit={handleSubmit} loading={loading} buttonLabel="Login">
      <Input
        type="email"
        id={AvailableLoginFormFieldsId.EMAIL}
        label="E-mail"
        value={email}
        onChange={handleChange}
        placeholder="email@gmail.com"
        className="input"
      />
      <Input
        type="password"
        id={AvailableLoginFormFieldsId.PASSWORD}
        label="Password"
        value={password}
        onChange={handleChange}
        placeholder="Enter Your Password"
        className="input"
      />
    </Form>
  );
};
