import React, { FC, MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick: () => MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ children, type, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="Button"
    >
      {children}
    </button>
  );
};

export default Button;
