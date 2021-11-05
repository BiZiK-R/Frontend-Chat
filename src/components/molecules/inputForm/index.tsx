import React, { FC, useState, useCallback } from "react";
import cn from "classnames";
import { Input } from "../../atoms/Input";

import "./inputForm.scss";

interface InputFormProps {
  placeholder: string;
  description: string;
  name?: string;
  value: string;
  required?: boolean;
  type: "text" | "password" | "email";
  inValidInput?: boolean;
  errorText?: string | undefined;
  theme?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export const InputForm: FC<InputFormProps> = ({
  description,
  theme,
  errorText,
  inValidInput,
  onBlur = () => {
    //do nothing
  },
  ...props
}) => {
  const [focusInput, setFocusInput] = useState(false);

  const onFocus = () => {
    setFocusInput(true);
  };

  const callbacks = {
    onBlur: useCallback(() => {
      setFocusInput(false);
      return onBlur();
    }, [onBlur]),
  };

  return (
    <div className={cn("input-form", theme ? `input-form_${theme}` : "")}>
      <span className="input-form__description">{description}</span>
      <label
        className={cn(
          "input-form__wrapper",
          focusInput ? "input-form__wrapper_typing" : "",
          inValidInput ? "input-form__wrapper_error" : ""
        )}
      >
        <Input
          onFocus={onFocus}
          onBlur={callbacks.onBlur}
          theme="form"
          {...props}
        />
      </label>
      {inValidInput && (
        <div className="input-form_error__text">{errorText}</div>
      )}
    </div>
  );
};
