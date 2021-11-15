class UploadFile {
  _apiUploadFile: string;

  constructor() {
    this._apiUploadFile = "http://109.194.37.212:93/api/upload";
  }

  postFile = async (files: FileList) => {
    if (!files.length) {
      console.warn("File not selected");
      return;
    }
    const data = new FormData();
    for (let index_file = 0; index_file < files.length; index_file++) {
      const item = files[index_file];
      if (typeof files[index_file] == "object") {
        data.append(String(index_file), item, item.name);
      }
    }
    const response = await fetch(this._apiUploadFile, {
      method: "POST",
      body: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "same-origin",
    });
    if (response.ok) {
      const json = await response.text();
      return json;
    } else {
      console.log(response);
    }
  };
}

const uploadFile = new UploadFile();

export { uploadFile };
