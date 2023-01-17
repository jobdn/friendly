import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import classes from "./Button.module.css";

interface ButtonProps
  extends React.PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  onClick: handleButtonClick,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(classes.button, className)}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
