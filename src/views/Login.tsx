import styled from "styled-components";
import BackButton from "../components/BackButton";
import CommonInput from "../components/CommonInput";

const Login = () => {
  return (
    <LoginWrap>
      <BackButton />
      <LoginContainer>
        <h1>Login</h1>

        <CommonInput placeHolderText="ID" />
        <CommonInput placeHolderText="PW" />
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
    color: #fff;
  }
`;
