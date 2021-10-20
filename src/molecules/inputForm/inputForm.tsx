import React, { FC, useState } from "react";
import cn from "classnames";
import Input from "../../atoms/Input";

import "./inputForm.scss";

interface InputFormProps {
  placeholder: string;
  required?: boolean;
  type?: "text" | "password" | "email";
  invalidInput?: boolean;
  onChange: (value: string) => string;
}

const InputForm: FC<InputFormProps> = ({
  placeholder,
  required,
  type,
  invalidInput,
  onChange,
}) => {
  const [valueInput, setValueInput] = useState("");
  const [focusInput, setFocusInput] = useState(false);

  const onFocus = () => {
    setFocusInput(true);
  };

  const onBlur = () => {
    setFocusInput(false);
  };

  return (
    <>
      <label
        className={cn(
          "InputForm",
          focusInput ? "InputForm_typing" : "",
          invalidInput ? "InputForm_error" : ""
        )}
      >
        <Input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={valueInput}
          className="InputForm__target"
          required={required}
          type={type}
          placeholder={placeholder}
        />
      </label>
      {invalidInput && (
        <div className="InputForm_error__text">Something goes wrong</div>
      )}
    </>
  );
};

export default InputForm;
