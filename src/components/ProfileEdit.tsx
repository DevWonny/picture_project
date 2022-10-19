import React, { SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import CloseIcon from "../assets/CloseIcon.svg";

import CommonInput from "../components/CommonInput";
import CommonSubmit from "../components/CommonSubmit";

interface props {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const ProfileEdit = (props: props) => {
  return (
    <EditWrap>
      <EditCloseButton onClick={() => props.setIsModal(false)}>
        <img src={CloseIcon} alt="close_icon" />
      </EditCloseButton>
      <h1>Profile Edit</h1>
      <EditProfileImage></EditProfileImage>
      <CommonInput placeHolderText="ID" />
      <CommonInput placeHolderText="PW" />
      <CommonInput placeHolderText="Name" />
      <CommonInput placeHolderText="Introduce" />
      <CommonSubmit submitText="Change" />
    </EditWrap>
  );
};

export default ProfileEdit;

const EditWrap = styled.div`
  width: 350px;
  height: 93%;
  background: #bda68a;
  position: absolute;
  top: 3.5%;
  left: calc(50% - 175px);
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: #e2e2e0;
    font-size: 30px;
    text-align: center;
    margin: 0;
    font-weight: 500;
  }
`;

const EditCloseButton = styled.div`
  width: 27px;
  height: 27px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const EditProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #000;
  margin-top: 30px;
  margin-bottom: 20px;
`;
