import styled from "styled-components";
import BackButtonImage from "../assets/BackButton.svg";

const BackButton = () => {
  return (
    <BackButtonWarp>
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
