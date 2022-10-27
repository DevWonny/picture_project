import { SetStateAction, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginAPI, RegisterAPI } from "../api/User";

import { UserEdit } from "../api/User";

interface submitType {
  submitText: string;
  isState?: boolean;
  id?: string;
  password?: string;
  passwordCheck?: string;
  name?: string;
  introduce?: string;
  setIsModal?: Dispatch<SetStateAction<boolean>>;
}

const CommonSubmit = (props: submitType) => {
  // navigate
  const navigate = useNavigate();

  // validation
  // id validation - 영어/숫자 포함 5자 이상 10자 이하
  const idValidation = () => {
    const idRegularExpression = /^[A-Za-z0-9]{3,10}$/;

    if (!!props.id && !idRegularExpression.test(props.id)) {
      alert(
        "아이디를 확인해주세요. 아이디는 영문, 숫자 포함 5자 이상 10자 이하로 입력해주세요."
      );
      return false;
    }

    return true;
  };

  // password validation - 영어/숫자 포함 8자 이상 16자 이하
  const passwordValidation = () => {
    // const pwRegularExpression = /^[A-Za-z0-9]*$/;
    const pwRegularExpression = /^(?=.*[A-Za-z])(?=.*?\d)[A-Za-z\d]{8,16}$/;

    if (!!props.password && !pwRegularExpression.test(props.password)) {
      alert(
        "비밀번호를 확인해주세요. 비밀번호는 영문, 숫자 포함 8자 이상 16자 이하로 입력해주세요."
      );
      return false;
    }

    return true;
  };

  // passwordCheck validation - password와 동일한 지 체크
  const passwordCheckValidation = () => {
    if (
      !!props.password &&
      !!props.passwordCheck &&
      props.password !== props.passwordCheck
    ) {
      alert("비밀번호를 확인해주세요!");
      return false;
    }
    return true;
  };

  // register validation
  const onRegisterValidation = () => {
    if (!idValidation()) {
      return false;
    }
    if (!passwordValidation()) {
      return false;
    }
    if (!passwordCheckValidation()) {
      return false;
    }
    return true;
  };

  // login validation
  const onLoginValidation = () => {
    if (!idValidation()) {
      return false;
    }
    if (!passwordValidation()) {
      return false;
    }
    return true;
  };

  // login api 호출
  const loginClick = async () => {
    // login validation
    if (!onLoginValidation()) {
      return;
    }
    if (!!props.id && !!props.password) {
      const res = await LoginAPI({
        userId: props.id,
        password: props.password,
      });

      if (res) {
        localStorage.setItem("sessionId", res.data.sessionId);
        navigate("/main");
      }
    }
  };

  // register api 호출
  const registerClick = async () => {
    // register validation
    if (!onRegisterValidation()) {
      return;
    }
    if (!!props.id && !!props.password && !!props.name && !!props.introduce) {
      const res = await RegisterAPI({
        userId: props.id,
        password: props.password,
        name: props.name,
        introduce: props.introduce,
      });

      if (res) {
        localStorage.setItem("sessionId", res.data.sessionId);
        navigate("/main");
      }
    }
  };

  // profile Edit api
  const userEditClick = async () => {
    const sessionId = localStorage.getItem("sessionId");

    if (!!sessionId) {
      const res = await UserEdit({
        sessionId: sessionId,
        name: props.name,
        introduce: props.introduce,
      });
      if (res) {
        if (props.setIsModal) props.setIsModal(false);
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
        } else if (props.submitText === "Change") {
          userEditClick();
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
