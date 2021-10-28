import React, { FC } from "react";
import cn from "classnames";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: (e: React.FormEvent) => void;
  theme?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick = () => {
    //do nothing
  },
  theme,
}) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      disabled={disabled}
      type={type}
      className={cn("button", theme ? `button_${theme}` : "")}
    >
      {children}
    </button>
  );
};

export { Button };
