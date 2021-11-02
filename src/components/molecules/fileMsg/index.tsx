import React, { FC } from "react";
import { IFile } from "../../../types/types";

import "./fileMsg.scss";

interface FileMsgProps {
  file: IFile;
}

export const FileMsg: FC<FileMsgProps> = ({ file }) => {
  return (
    <div className="file-msg">
      <img className="file-msg__icon" src="/image/fileIcon.svg" />
      <div className="file-msg__description">
        <p className="file-msg__name">{file.name}</p>
        <p className="file-msg__size">{file.size}</p>
      </div>
    </div>
  );
};
