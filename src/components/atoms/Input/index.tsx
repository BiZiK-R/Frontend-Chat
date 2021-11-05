import React, { ChangeEventHandler, FC, useCallback } from "react";
import cn from "classnames";

import "./Input.scss";

interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  name?: string;
  required?: boolean;
  focused?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  autocomplete?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  theme?: string;
}

export const Input: FC<InputProps> = ({
  value,
  type = "text",
  placeholder,
  required,
  focused,
  disabled = false,
  tabIndex,
  autocomplete,
  name,
  onChange = () => {
    //do nothing
  },
  onFocus = () => {
    //do nothing
  },
  onBlur = () => {
    //do nothing
  },
  theme,
}) => {
  const callbacks = {
    // onChange: useCallback(
    //   (e) => {
    //     const value = e.target.value;
    //     return onChange(value);
    //   },
    //   [onChange]
    // ),
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
        className={cn("input__input", theme ? `input__input_${theme}` : "")}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        tabIndex={tabIndex}
        disabled={disabled}
        required={required}
        autoFocus={focused}
        autoComplete={autocomplete ? "on" : "off"}
        onChange={onChange}
        onFocus={callbacks.onFocus}
        onBlur={callbacks.onBlur}
      />
    </div>
  );
};
