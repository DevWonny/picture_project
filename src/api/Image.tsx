import axios from "axios";

interface ImageData {
  file?: any;
  sessionId?: string;
}

// image upload api
export const ImageUploadAPI = async (props: ImageData) => {
  const formData = new FormData();
  if (!!props.file) {
    formData.append("image", props.file);
  }

  try {
    const res = await axios.post(`http://localhost:5000/images/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        sessionid: props.sessionId,
      },
    });

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

// image get api
export const ImageGetAPI = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/images/`);

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
