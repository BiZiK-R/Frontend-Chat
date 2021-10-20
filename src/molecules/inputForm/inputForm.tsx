import React, { FC, useState, useCallback } from "react";
import cn from "classnames";
import Input from "../../atoms/Input";

import "./inputForm.scss";

interface InputFormProps {
  placeholder: string;
  description: string;
  value: string;
  required?: boolean;
  type?: "text" | "password" | "email";
  validInput?: boolean;
  onChange: (value: string) => string;
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
    <div className={cn("InputForm", `InputForm_${theme}`)}>
      <span className="InputForm__description">{description}</span>
      <label
        className={cn(
          "InputForm__wrapper",
          focusInput ? "InputForm__wrapper_typing" : "",
          !validInput ? "InputForm__wrapper_error" : ""
        )}
      >
        <Input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={callbacks.onBlur}
          value={value}
          className="InputForm__wrapper__target"
          required={required}
          type={type}
          placeholder={placeholder}
        />
      </label>
      {!validInput && (
        <div className="InputForm_error__text">Something goes wrong</div>
      )}
    </div>
  );
};

export default InputForm;
