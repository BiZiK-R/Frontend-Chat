import React, { FC, useCallback } from "react";
import cn from "classnames";

import "./Input.scss";

interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  required: boolean;
  focused: boolean;
  disabled: boolean;
  tabIndex: number;
  autocomplete: boolean;
  onChange: (e: Event) => string;
  onFocus: () => void;
  onBlur: () => void;
}

const Input: FC<InputProps> = ({
  value,
  type = "text",
  placeholder,
  required,
  focused,
  disabled = false,
  tabIndex,
  autocomplete,
  onChange,
  onFocus,
  onBlur,
}) => {
  const callbacks = {
    onChange: useCallback(
      (e) => {
        const value = e.target.value;
        return onChange(value);
      },
      [onChange]
    ),
    onFocus: useCallback(() => {
      return onFocus();
    }, [onFocus]),
    onBlur: useCallback(() => {
      return onBlur();
    }, [onBlur]),
  };

  return (
    <div className="input">
      <input
        className="input__input"
        value={value}
        type={type}
        placeholder={placeholder}
        tabIndex={tabIndex}
        disabled={disabled}
        required={required}
        autoFocus={focused}
        autoComplete={autocomplete ? "on" : "off"}
        onChange={callbacks.onChange}
        onFocus={callbacks.onFocus}
        onBlur={callbacks.onBlur}
      />
    </div>
  );
};

export default Input;
