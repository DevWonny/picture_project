import styled from "styled-components";
import BackButton from "../components/BackButton";
import CommonInput from "../components/CommonInput";
import CommonSubmit from "../components/CommonSubmit";

const SignUp = () => {
  return (
    <SignUpWrap>
      <BackButton />
      <SignUpContainer>
        <h1>Sign Up</h1>

        <CommonInput placeHolderText="ID" />
        <CommonInput placeHolderText="PW" />
        <CommonInput placeHolderText="PW Check" />
        <CommonInput placeHolderText="Name" />
        <CommonInput placeHolderText="Introduce" />
        <CommonSubmit submitText="Sign Up" />
      </SignUpContainer>
    </SignUpWrap>
  );
};

export default SignUp;

const SignUpWrap = styled.div`
  width: 450px;
  height: 900px;
  position: relative;
  margin: 30px auto;
  background: #8b7c67;
  display: flex;
  align-items: center;
`;

const SignUpContainer = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 60px 0;
    color: #e2e2e0;
  }
`;
