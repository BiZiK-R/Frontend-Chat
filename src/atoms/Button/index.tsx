import React, { FC, MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, type, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="button"
    >
      {children}
    </button>
  );
};

export { Button };
