import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";

const Upload = () => {
  // location
  const location = useLocation();

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
        <UploadContentContainer></UploadContentContainer>
        {/* text upload */}
        <UploadContentContainer></UploadContentContainer>
        <UploadButton>이미지 업로드 버튼</UploadButton>
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

const UploadContentContainer = styled.div`
  width: 400px;
  height: 35%;
  background: #cabfae;
  border-radius: 10px;
  margin-top: 55px;
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
