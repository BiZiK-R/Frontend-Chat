import React, { FC } from "react";
import cn from "classnames";

import "./logo.scss";

interface LogoProps {
  theme?: string;
}

export const Logo: FC<LogoProps> = ({ theme }) => {
  return <img className={cn("logo", `logo_${theme}`)} src="/image/logo.svg" />;
};
