import React, { FC } from "react";

import "./loading.scss";

const Loading: FC = () => {
  return (
    <div className="loading">
      <img className="loading__img" src="/image/loading.svg" />
    </div>
  );
};

export default Loading;
