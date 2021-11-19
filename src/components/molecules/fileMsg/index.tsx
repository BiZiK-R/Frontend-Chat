import React, { FC } from "react";

import "./fileMsg.scss";

interface FileMsgProps {
  file: File;
  url?: string;
}

export const FileMsg: FC<FileMsgProps> = ({ file, url }) => {
  const sizeString =
    file.size > 1048576
      ? `${(file.size / 1048576).toFixed(2)} MB`
      : `${(file.size / 1024).toFixed(2)} KB`;

  const getUrl = () => {
    const fileType = file.type;
    if (
      fileType === "image/jpeg" ||
      fileType === "image/gif" ||
      fileType === "image/png" ||
      fileType === "image/svg+xml"
    ) {
      if (url) {
        return url;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          return `${reader.result}`;
        };
      }
    } else {
      return "/image/fileIcon.svg";
    }
  };

  const urlFile = getUrl();
  console.log(urlFile);

  return (
    <div className="file-msg">
      <img className="file-msg__icon" src={urlFile} />
      <div className="file-msg__description">
        <p className="file-msg__name">{file.name}</p>
        <p className="file-msg__size">{sizeString}</p>
      </div>
    </div>
  );
};
