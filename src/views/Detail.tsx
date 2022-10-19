import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";

const Detail = () => {
  // location
  const location = useLocation();
  return (
    <DetailWrap>
      <DetailHeader>
        <BackButton parameter={location.pathname} />
        <p>
          ID
          <br />
          <span>게시물</span>
        </p>
      </DetailHeader>
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
