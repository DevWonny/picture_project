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
  background: red;
  position: relative;
`;
