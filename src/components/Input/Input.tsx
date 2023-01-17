import React, { InputHTMLAttributes } from "react";

import classes from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputComponent: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <label>
      {label}
      <input {...props} className={classes.input} />
    </label>
  );
};

export const Input = React.memo(InputComponent);
