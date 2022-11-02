import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import AddImage from "../assets/AddImage.svg";
import Loading from "../components/Loading";

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

  // image Text
  const [imageText, setImageText] = useState("");

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // image
  const imageDrop = (e: any) => {
    setFile(e.target.files[0]);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e: any) => {
      setImageSrc(e.target.result);
    };
  };

  // image upload api
  const imageUploadApi = async () => {
    const sessionId = localStorage.getItem("sessionId");

    if (!isLoading) {
      setIsLoading(true);
    }

    if (!!sessionId && !!file) {
      const res = await ImageUploadAPI({
        sessionId: sessionId,
        file: file,
        imageText: imageText,
      });

      if (res) {
        setIsLoading(false);
        navigate("/main");
      }
    }
  };

  // 글자 수 제한
  useEffect(() => {
    if (imageText.length > 300) {
      alert("300자 이내로 입력해주세요!");
      setImageText(imageText.substring(0, 300));
    }
  }, [imageText]);

  return (
    <>
      <UploadWrap>
        <UploadHeader>
          <BackButton parameter={location.pathname} />
          <p>
            {location.state}
            <br />
            <span>Upload</span>
          </p>
        </UploadHeader>
        <UploadContentWrap>
          {/* image upload */}
          <UploadContentContainer>
            <Preview>
              {imageSrc ? (
                <img src={imageSrc} alt="image_test" />
              ) : (
                <p>오늘 하루를 표현할 사진을 올려주세요!</p>
              )}
            </Preview>
            <ImageSearchButton>
              <input
                type="file"
                onChange={(e) => {
                  imageDrop(e);
                }}
              />
              이미지 찾기
            </ImageSearchButton>
          </UploadContentContainer>

          {/* text upload */}
          <TextWrap
            placeholder="오늘 하루를 남겨보세요!(300자 이내)"
            value={imageText}
            onChange={(e) => {
              setImageText(e.target.value);
            }}
          />
          <UploadButton
            onClick={() => {
              imageUploadApi();
            }}
          >
            <img src={AddImage} alt="add_image" />
          </UploadButton>
        </UploadContentWrap>
      </UploadWrap>
      {isLoading && <Loading loadingText="Upload" />}
    </>
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

const UploadContentContainer = styled.div`
  width: 400px;
  height: 50%;
  background: #cabfae;
  border-radius: 10px;
  margin-top: 55px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageSearchButton = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #8b7c67;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #e2e2e0;

  & input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    cursor: pointer;
    ::-webkit-file-upload-button {
      cursor: pointer;
    }
  }
`;

const Preview = styled.div`
  width: 300px;
  height: 70%;
  line-height: 16;

  & img {
    width: 100%;
    height: 100%;
  }

  & p {
    margin: 0;
    text-align: center;
    color: #767971;
  }
`;

const TextWrap = styled.textarea`
  width: 400px;
  height: 20%;
  background: #cabfae;
  border: none;
  border-radius: 10px;
  outline: none;
  margin-top: 50px;
  padding: 10px 0 0 0;
`;
