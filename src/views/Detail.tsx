import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DeleteIcon from "../assets/DeleteIcon.svg";

import BackButton from "../components/BackButton";
import CommonConfirm from "../components/CommonConfirm";
import ModalPortal from "../components/ModalPortal";
import Loading from "../components/Loading";

import { ImageDetailGetAPI } from "../api/Image";

const Detail = () => {
  // location
  const location = useLocation();
  // params
  const params = useParams();

  // text state
  const [text, setText] = useState("");

  // date
  const [date, setDate] = useState("");

  // image delete modal
  const [isImageDelete, setIsImageDelete] = useState(false);

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // image detail get api
  const imageDetailGetApi = async () => {
    if (!isLoading) {
      setIsLoading(true);
    }
    const res = await ImageDetailGetAPI({ imageId: location.state.detailId });

    if (res) {
      setText(res.data.text);
      setDate(res.data.createdAt);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    imageDetailGetApi();
  }, []);

  return (
    <>
      <DetailWrap>
        {/* Header */}
        <DetailHeader>
          <BackButton parameter={location.pathname} />
          <p>
            {location.state.id}
            <br />
            <span>게시물</span>
          </p>
        </DetailHeader>

        {/* Detail Contents */}
        <DetailContainer>
          <DetailContainerHeader>
            <DetailDeleteButton
              onClick={() => {
                setIsImageDelete(true);
              }}
            >
              <img src={DeleteIcon} alt="delete_icon" />
            </DetailDeleteButton>
          </DetailContainerHeader>
          {/* 이미지 영역 */}
          <DetailImageContainer>
            <img
              src={`http://localhost:5000/uploads/${params.image}`}
              alt="detail_image"
            />
          </DetailImageContainer>

          <DateContainer>{date.split("T")[0]}</DateContainer>
          {/* text 영역 */}
          <DetailTextContainer>
            <p>{text}</p>
          </DetailTextContainer>
        </DetailContainer>

        {isImageDelete && (
          <ModalPortal>
            <CommonConfirm
              detailId={location.state.detailId}
              setIsConfirm={setIsImageDelete}
            />
          </ModalPortal>
        )}
      </DetailWrap>
      {isLoading && <Loading loadingText="이미지 정보 가져오는 중..." />}
    </>
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

const DetailDeleteButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

const DetailImageContainer = styled.div`
  width: 100%;
  height: 65%;
  background: #e2e2e0;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const DetailTextContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: #cabfae;
  position: absolute;
  bottom: 0;

  & p {
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 0;
  }
`;

const DateContainer = styled.div`
  width: 100%;
  height: 30px;
  text-align: right;
  line-height: 30px;
  color: #e2e2e0;
`;
