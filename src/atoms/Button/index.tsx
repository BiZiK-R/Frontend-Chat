import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick: (e: React.FormEvent) => void;
}

const Button: FC<ButtonProps> = ({ children, type, disabled, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      disabled={disabled}
      type={type}
      className="button"
    >
      {children}
    </button>
  );
};

export { Button };
