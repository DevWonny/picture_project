import styled from "styled-components";
import { LoginAPI, RegisterAPI } from "../api/User";

interface submitType {
  submitText: string;
  isState?: boolean;
  id?: string;
  password?: string;
  name?: string;
  introduce?: string;
}

const CommonSubmit = (props: submitType) => {
  // login api 호출
  const loginClick = async () => {
    if (!!props.id && !!props.password) {
      const res = await LoginAPI({
        userId: props.id,
        password: props.password,
      });

      if (res) {
        console.log("login", res);
        localStorage.setItem("sessionId", res.data.sessionId);
      }
    }
  };

  // register api 호출
  const registerClick = async () => {
    console.log(props);
    if (!!props.id && !!props.password && !!props.name && !!props.introduce) {
      const res = await RegisterAPI({
        userId: props.id,
        password: props.password,
        name: props.name,
        introduce: props.introduce,
      });

      if (res) {
        console.log("register", res);
        localStorage.setItem("sessionId", res.data.sessionId);
      }
    }
  };
  return (
    <CommonSubmitContainer
      isSubmit={!!props.isState}
      onClick={() => {
        if (props.submitText === "Login") {
          loginClick();
        } else if (props.submitText === "Sign Up") {
          registerClick();
        }
      }}
    >
      {props.submitText}
    </CommonSubmitContainer>
  );
};

export default CommonSubmit;

const CommonSubmitContainer = styled.div<{ isSubmit: boolean }>`
  width: 300px;
  height: 60px;
  background: ${(props) => (props.isSubmit ? "#e2e2e0" : "#CABFAE")};
  border-radius: 10px;
  color: #767971;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  font-weight: 500;
  cursor: ${(props) => (props.isSubmit ? "pointer" : "auto")};
`;
