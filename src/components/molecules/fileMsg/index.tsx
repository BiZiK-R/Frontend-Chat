import React, { FC } from "react";
import { IFile } from "../../../types/types";

import "./fileMsg.scss";

interface FileMsgProps {
  file: any;
}

export const FileMsg: FC<FileMsgProps> = ({ file }) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const urlFile =
    typeof reader.result == "string" ? reader.result : "/image/fileIcon.svg";
  return (
    <div className="file-msg">
      <img className="file-msg__icon" src={urlFile} />
      <div className="file-msg__description">
        <p className="file-msg__name">{file.name}</p>
        <p className="file-msg__size">{file.size}</p>
      </div>
    </div>
  );
};
