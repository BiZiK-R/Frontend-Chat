class UploadFile {
  _apiUploadFile: string;

  constructor() {
    this._apiUploadFile = "http://109.194.37.212:93/api/upload";
  }

  postFile = async (file: File) => {
    const data = new FormData();
    data.append(String(0), file, file.name);
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
      //console.log(response);
      return false;
    }
  };
}

const uploadFile = new UploadFile();

export { uploadFile };
