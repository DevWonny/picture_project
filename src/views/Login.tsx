import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import CommonInput from "../components/CommonInput";
import CommonSubmit from "../components/CommonSubmit";

const Login = () => {
  // id state
  const [id, setId] = useState("");

  // password state
  const [password, setPassword] = useState("");

  return (
    <LoginWrap>
      <BackButton />
      <LoginContainer>
        <h1>Login</h1>

        <CommonInput placeHolderText="ID" setFunction={setId} />
        <CommonInput placeHolderText="PW" setFunction={setPassword} />
        <CommonSubmit submitText="Login" />
        <span>Sign Up</span>
      </LoginContainer>
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  width: 450px;
  height: 900px;
  background: #8b7c67;
  position: relative;
  margin: 30px auto;
  display: flex;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 80%;
  height: 50%;
  position: absolute;
  left: 10%;
  border: 1px solid black;
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
  & span {
    margin-top: 30px;
    color: #e2e2e0;
    cursor: pointer;
  }
`;
