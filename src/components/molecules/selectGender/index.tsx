import React, { FC } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import arrowSelector from "../../../assets/arrowSelector.svg";

import "./selectGender.scss";

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    padding: 16,
  }),
  menu: (provided: any) => ({
    ...provided,
    width: "calc(50% - 9px)",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: "flex",
    border: "1px solid #B3CDF8",
    borderRadius: "8px",
    height: "54px",
    width: "calc(50% - 12px)",
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
  placeholder: (provided: any) => ({
    ...provided,
    text: "Your gender",
    color: "#9F9F9F",
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "23px",
    paddingLeft: 0,
    marginLeft: 0,
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    paddingLeft: "16px",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={arrowSelector} />
    </components.DropdownIndicator>
  );
};

interface SelectGenderProps {
  name?: string;
  description: string;
  onChange: (e: any) => any;
  genders: {
    gender_id: number;
    gender: string;
  }[];
}

export const SelectGender: FC<SelectGenderProps> = ({
  description,
  genders,
  name,
  onChange,
}) => {
  const optionGenders = genders.map((item) => ({
    value: item.gender_id,
    label: item.gender,
  }));

  return (
    <div className="select-gender">
      <span className="select-gender__description">{description}</span>
      <Select
        onChange={onChange}
        options={optionGenders}
        styles={customStyles}
        components={{ DropdownIndicator }}
        name={name}
      />
    </div>
  );
};
