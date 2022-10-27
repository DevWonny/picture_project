import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";

import { ImageUploadAPI } from "../api/Image";

const Upload = () => {
  // location
  const location = useLocation();
  // navigate
  const navigate = useNavigate();

  // file
  const [file, setFile] = useState(null);

  // image src
  // 업로드 하려는 이미지 미리보기 위한 state
  const [imageSrc, setImageSrc] = useState(null);

  // image
  const imageDrop = (e: any) => {
    setFile(e.target.files[0]);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e: any) => {
      setImageSrc(e.target.result);
    };
  };

  const imageUploadApi = async () => {
    const sessionId = localStorage.getItem("sessionId");

    if (!!sessionId && !!file) {
      const res = await ImageUploadAPI({
        sessionId: sessionId,
        file: file,
      });

      if (res) {
        console.log(res);
        navigate("/main");
      }
    }
  };

  return (
    <UploadWrap>
      <UploadHeader>
        <BackButton parameter={location.pathname} />
        <p>
          ID
          <br />
          <span>Upload</span>
        </p>
      </UploadHeader>
      <UploadContentWrap>
        {/* image upload */}
        <UploadContentContainer type="file" onChange={(e) => imageDrop(e)} />
        {/* {imageSrc && <img src={imageSrc} alt="image_test" />} */}

        {/* text upload */}
        <UploadContentContainer></UploadContentContainer>
        <UploadButton
          onClick={() => {
            imageUploadApi();
          }}
        >
          이미지 업로드 버튼
        </UploadButton>
      </UploadContentWrap>
    </UploadWrap>
  );
};

export default Upload;

const UploadWrap = styled.div`
  width: 450px;
  height: 100vh;
  background: #8b7c67;
  position: relative;
  margin: 0 auto;
`;

const UploadHeader = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #cabfae;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    text-align: center;
    color: #e2e2e0;
    font-size: 20px;
    margin: 0;

    & span {
      font-weight: 900;
    }
  }
`;

const UploadContentWrap = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const UploadContentContainer = styled.input`
  width: 400px;
  height: 35%;
  background: #cabfae;
  border-radius: 10px;
  margin-top: 55px;
  border: none;
  outline: none;
`;

const UploadButton = styled.div`
  width: 100%;
  height: 70px;
  background: #e2e2e0;
  text-align: center;
  line-height: 70px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;
