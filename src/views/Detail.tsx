import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import DeleteIcon from "../assets/DeleteIcon.svg";

import BackButton from "../components/BackButton";

const Detail = () => {
  // location
  const location = useLocation();
  // params
  const params = useParams();

  return (
    <DetailWrap>
      {/* Header */}
      <DetailHeader>
        <BackButton parameter={location.pathname} />
        <p>
          ID
          <br />
          <span>게시물</span>
        </p>
      </DetailHeader>

      {/* Detail Contents */}
      <DetailContainer>
        <DetailContainerHeader>
          <DetailProfileImage></DetailProfileImage>
          <DetailDeleteButton>
            <img src={DeleteIcon} alt="delete_icon" />
          </DetailDeleteButton>
        </DetailContainerHeader>
        {/* 이미지 영역 */}
        <DetailImageContainer></DetailImageContainer>

        {/* text 영역 */}
        <DetailTextContainer></DetailTextContainer>
      </DetailContainer>
    </DetailWrap>
  );
};

export default Detail;

const DetailWrap = styled.div`
  width: 450px;
  height: 100vh;
  overflow: auto;
  margin: 0 auto;
  background: #8b7c67;
  -ms-overflow-style: none;
  scrollbar-width: none;

  // scroll 안보이게
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DetailHeader = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    margin: 0;
    font-size: 20px;
    color: #e2e2e0;
    text-align: center;

    & span {
      font-weight: 900;
    }
  }
`;

const DetailContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  border-top: 2px solid #cabfae;
`;

const DetailContainerHeader = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
`;
const DetailProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  position: relative;
  left: 20px;
  right: 0;
  bottom: 0;
  top: 10px;
`;

const DetailDeleteButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const DetailImageContainer = styled.div`
  width: 100%;
  height: 70%;
  background: #e2e2e0;
`;

const DetailTextContainer = styled.div`
  width: 100%;
  height: 15%;
  background-color: #e2e2e0;
  position: absolute;
  bottom: 0;
`;
