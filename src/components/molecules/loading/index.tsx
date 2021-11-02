import React, { FC } from "react";

import "./loading.scss";

export const Loading: FC = () => {
  return (
    <div className="loading">
      <img className="loading__img" src="/image/loading.svg" />
    </div>
  );
};
