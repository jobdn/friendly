import React from "react";

import { Button } from "@components/Button";

import classes from "./Form.module.css";

interface FormProps extends React.PropsWithChildren {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  loading: boolean;
  buttonLabel: string;
}

const FormComponent: React.FC<FormProps> = ({
  onSubmit,
  loading,
  buttonLabel,
  children,
}) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}

      <Button className={classes.form__button} disabled={loading}>
        {loading ? "Wait..." : buttonLabel}
      </Button>
    </form>
  );
};

export const Form = React.memo(FormComponent);
