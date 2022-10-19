import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import BackButtonImage from "../assets/BackButton.svg";

interface detailInterface {
  parameter?: string;
}
const BackButton = (props: detailInterface) => {
  // navigate
  const navigate = useNavigate();

  // navigate를 활용한 go back
  const onBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonWarp isDetail={!!props.parameter} onClick={() => onBack()}>
      <img src={BackButtonImage} alt="Back_Button_image" />
    </BackButtonWarp>
  );
};

export default BackButton;

const BackButtonWarp = styled.div<{ isDetail: boolean }>`
  width: 35px;
  height: 35px;
  position: absolute;

  top: ${(props) => (props.isDetail ? "15px" : "35px")};
  left: ${(props) => (props.isDetail ? "20px" : "35px")};
  text-align: center;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;
