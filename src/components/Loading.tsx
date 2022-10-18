import React from "react";
import styled from "styled-components";
import LoadingImage from "../assets/LoadingMark.svg";

const Loading = () => {
  return (
    <LoadingWrap>
      <LoadingImageContainer>
        <img src={LoadingImage} alt="Loading_image" />
      </LoadingImageContainer>

      <p>Loading Text</p>
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
