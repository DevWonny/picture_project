import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import BackButtonImage from "../assets/BackButton.svg";

const BackButton = () => {
  // navigate
  const navigate = useNavigate();

  // navigate를 활용한 go back
  const onBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonWarp onClick={() => onBack()}>
      <img src={BackButtonImage} alt="Back_Button_image" />
    </BackButtonWarp>
  );
};

export default BackButton;

const BackButtonWarp = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 35px;
  left: 35px;
  text-align: center;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;
