import axios from "axios";

interface ImageData {
  file?: any;
  sessionId?: string;
  imageId?: string;
  imageText?: string;
}
// image upload api
export const ImageUploadAPI = async (props: ImageData) => {
  const formData = new FormData();
  if (!!props.file && !!props.imageText) {
    formData.append("image", props.file);
    formData.append("text", props.imageText);
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
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

// image detail get api
export const ImageDetailGetAPI = async (props: ImageData) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/images/${props.imageId}`
    );

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

// image delete api
export const ImageDeleteAPI = async (props: ImageData) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/images/${props.imageId}`,
      { headers: { sessionid: props.sessionId } }
    );

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
