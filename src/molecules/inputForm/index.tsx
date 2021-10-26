import React, { FC, useState, useCallback } from "react";
import cn from "classnames";
import { Input } from "../../atoms/Input";

import "./inputForm.scss";

interface InputFormProps {
  placeholder: string;
  description: string;
  value: string;
  required?: boolean;
  type: "text" | "password" | "email";
  validInput?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  theme?: string;
}

const InputForm: FC<InputFormProps> = ({
  placeholder,
  required,
  value,
  type,
  validInput,
  onChange,
  description,
  onBlur,
  theme,
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
    <div className={cn("input-form", `input-form_${theme}`)}>
      <span className="input-form__description">{description}</span>
      <label
        className={cn(
          "input-form__wrapper",
          focusInput ? "input-form__wrapper_typing" : "",
          !validInput ? "input-form__wrapper_error" : ""
        )}
      >
        <Input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={callbacks.onBlur}
          value={value}
          required={required}
          type={type}
          placeholder={placeholder}
          theme="form"
        />
      </label>
      {!validInput && (
        <div className="input-form_error__text">Something goes wrong</div>
      )}
    </div>
  );
};

export { InputForm };
