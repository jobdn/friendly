import React from "react";
import { useNavigate } from "react-router-dom";

import { registerThunk } from "@store/thunks/register.thunk";
import { Input } from "@components/Input";
import { Form } from "@components/Form";
import { AvailableRegistrationFormFieldsId } from "@models/form-fields";

import { useAppDispatch, useAppSelector } from "../../hooks";

export const RegistrationForm: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.user.status);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(registerThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.id === AvailableRegistrationFormFieldsId.EMAIL) {
      setEmail(e.target.value);
    } else if (e.target.id === AvailableRegistrationFormFieldsId.NAME) {
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const loading = React.useMemo(() => status === "loading", [status]);

  return (
    <Form onSubmit={handleSubmit} buttonLabel="Sign up" loading={loading}>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter Your Name"
        className="input"
        required
      />
      <Input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter Your E-mail"
        className="input"
        required
      />
      <Input
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter Your Password"
        className="input"
        required
      />
    </Form>
  );
};
