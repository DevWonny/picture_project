import styled from "styled-components";
import { LoginAPI } from "../api/User";

interface submitType {
  submitText: string;
  isState?: boolean;
  id?: string;
  password?: string;
}

const CommonSubmit = (props: submitType) => {
  // login api 호출
  const loginClick = async () => {
    if (!!props.id && !!props.password && props.submitText === "Login") {
      const res = await LoginAPI({
        userId: props.id,
        password: props.password,
      });

      console.log("login", res);
    }
  };
  return (
    <CommonSubmitContainer
      isSubmit={!!props.isState}
      onClick={() => {
        loginClick();
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
