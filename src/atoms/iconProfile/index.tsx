import React, { FC } from "react";
import cn from "classnames";

import "./iconProfile.scss";

interface IconProfileProps {
  sex: "Male" | "Female";
  theme?: string;
}

const IconProfile: FC<IconProfileProps> = ({ theme, sex }) => {
  return (
    <img
      className={cn("icon-profile", `icon-profile_${theme}`)}
      src={`/image/icon/iconProfile${sex}.svg`}
    />
  );
};

export { IconProfile };
