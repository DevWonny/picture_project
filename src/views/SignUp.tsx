import { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import CommonInput from "../components/CommonInput";
import CommonSubmit from "../components/CommonSubmit";

const SignUp = () => {
  // id state
  const [id, setId] = useState("");
  // password state
  const [password, setPassword] = useState("");
  // password check state
  const [passwordCheck, setPasswordCheck] = useState("");
  // name state
  const [name, setName] = useState("");
  // introduce state
  const [introduce, setIntroduce] = useState("");
  // sign up state
  const [isSignUp, setIsSignUp] = useState(false);

  // sign up button background 변경
  useEffect(() => {
    if (!!id && !!password && !!passwordCheck && !!name && !!introduce) {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  }, [id, password, passwordCheck, name, introduce]);

  return (
    <SignUpWrap>
      <BackButton />
      <SignUpContainer>
        <h1>Sign Up</h1>

        <CommonInput placeHolderText="ID" setFunction={setId} />
        <CommonInput placeHolderText="PW" setFunction={setPassword} />
        <CommonInput
          placeHolderText="PW Check"
          setFunction={setPasswordCheck}
        />
        <CommonInput placeHolderText="Name" setFunction={setName} />
        <CommonInput placeHolderText="Introduce" setFunction={setIntroduce} />
        <CommonSubmit
          submitText="Sign Up"
          isState={isSignUp}
          id={id}
          password={password}
          name={name}
          introduce={introduce}
        />
      </SignUpContainer>
    </SignUpWrap>
  );
};

export default SignUp;

const SignUpWrap = styled.div`
  width: 450px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
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
