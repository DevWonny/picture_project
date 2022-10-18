import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntroWrap>
      <p>앱 실행시 문구.... 뭐넣지....?</p>

      <IntroButton sign={false}>Login</IntroButton>
      <IntroButton sign={true}>Sign Up</IntroButton>
    </IntroWrap>
  );
};

export default Intro;

const IntroWrap = styled.div`
  max-width: 450px;
  min-height: 900px;
  background: #8b7c67;
  position: relative;
  margin: 30px auto;
  text-align: center;
  line-height: 900px;
`;

const IntroButton = styled.div<{ sign: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  background-color: #cabfae;
  color: #767971;
  font-size: 20px;
  position: absolute;
  bottom: 130px;
  left: ${(props) => !props.sign && "75px"};
  right: ${(props) => props.sign && "75px"};
  cursor: pointer;
`;
