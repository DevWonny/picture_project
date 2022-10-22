import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginAPI, RegisterAPI } from "../api/User";

interface submitType {
  submitText: string;
  isState?: boolean;
  id?: string;
  password?: string;
  passwordCheck?: string;
  name?: string;
  introduce?: string;
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
    const pwRegularExpression = /^[A-Za-z0-9]{8,16}$/;

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

  // name validation - 영어 / 한글
  const nameValidation = () => {
    // 모바일 경우도 확인 해야함! 천지인 키패드!!
    const nameRegularExpression = /^[a-zA-Zㄱ-ㅎ가-힣]$/;
    if (!!props.name && !nameRegularExpression.test(props.name)) {
      alert("이름을 확인해주세요. 이름은 영문, 한글만 입력해주세요.");
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
    if (!nameValidation()) {
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
        console.log("login", res);
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
        console.log("register", res);
        localStorage.setItem("sessionId", res.data.sessionId);
        navigate("/main");
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
