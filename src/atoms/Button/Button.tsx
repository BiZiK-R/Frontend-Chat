import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode | React.ReactNode;
  type?: "submit" | "reset" | "button";
}

const Button: FC<ButtonProps> = ({ children, type }) => {
  return (
    <button type={type} className="Button">
      {children}
    </button>
  );
};

export default Button;
