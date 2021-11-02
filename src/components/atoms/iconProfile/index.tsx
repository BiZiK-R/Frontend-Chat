import React, { FC } from "react";
import cn from "classnames";

import "./iconProfile.scss";

interface IconProfileProps {
  gender: string;
  theme?: string;
}

export const IconProfile: FC<IconProfileProps> = ({ theme, gender }) => {
  return (
    <img
      className={cn("icon-profile", `icon-profile_${theme}`)}
      src={`/image/icon/iconProfile${gender}.svg`}
    />
  );
};
