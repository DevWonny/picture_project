import React from "react";
import styled from "styled-components";

import LoadingImage from "../assets/LoadingMark.svg";
import { Oval } from "react-loader-spinner";

interface LoadingState {
  loadingText: string;
}

const Loading = (props: LoadingState) => {
  return (
    <LoadingWrap>
      <LoadingSpinner>
        <Oval
          height={100}
          width={100}
          color="#CABFAE"
          secondaryColor="#CABFAE"
          strokeWidth={5}
          strokeWidthSecondary={5}
        />
      </LoadingSpinner>

      <LoadingImageContainer>
        <img src={LoadingImage} alt="Loading_image" />
      </LoadingImageContainer>

      <p>{props.loadingText}</p>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  width: 450px;
  height: 900px;
  background: #8b7c67;
  margin: 30px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    width: 100%;
    font-size: 20px;
    color: #e2e2e0;
    position: absolute;
    margin: 0;
    bottom: 350px;
    text-align: center;
  }
`;

const LoadingSpinner = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingImageContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  & img {
    width: 100%;
    height: 100%;
  }
`;
