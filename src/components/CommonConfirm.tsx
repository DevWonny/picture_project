import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { LogoutAPI, UserDeleteAPI } from "../api/User";
import { ImageDeleteAPI } from "../api/Image";

interface confirmData {
  setIsConfirm?: Dispatch<SetStateAction<boolean>>;
  isText?: string;
  detailId?: string;
}

const CommonConfirm = (props: confirmData) => {
  // navigate
  const navigate = useNavigate();

  // logout api 호출
  const logoutApi = async () => {
    const sessionId = localStorage.getItem("sessionId");
    if (!!sessionId) {
      const res = await LogoutAPI({ sessionId: sessionId });
      if (res) {
        // logout 과 동시에 localStorage에서 session Id 제거
        localStorage.removeItem("sessionId");
        navigate("/");
      }
    }
  };

  // 회원탈퇴 api 호출
  const userDeleteApi = async () => {
    const sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      const res = await UserDeleteAPI({ sessionId });

      if (res) {
        localStorage.removeItem("sessionId");
        navigate("/");
      }
    }
  };

  // image delete api
  const imageDeleteApi = async () => {
    const sessionid = localStorage.getItem("sessionId");
    if (sessionid) {
      const res = await ImageDeleteAPI({
        imageId: props.detailId,
        sessionId: sessionid,
      });

      if (res) {
        navigate("/main");
      }
    }
  };

  const apiCall = () => {
    if (props.isText === "logout") {
      logoutApi();
      return;
    } else if (props.isText === "withdrawal") {
      userDeleteApi();
      return;
    } else {
      imageDeleteApi();
    }
  };

  return (
    <>
      <ConfirmBack />
      <ConfirmWrap>
        <ConfirmText>
          {props.isText === "logout"
            ? "로그아웃 하시겠습니까?"
            : props.isText === "withdrawal"
            ? "회원탈퇴를 하시겠습니까"
            : "게시물을 삭제하시겠습니까?"}
        </ConfirmText>
        <ConfirmButtonContainer>
          <ConfirmButton
            onClick={() => {
              apiCall();
            }}
          >
            확인
          </ConfirmButton>
          <ConfirmButton
            onClick={() => {
              if (!!props.setIsConfirm) {
                props.setIsConfirm(false);
              }
            }}
          >
            취소
          </ConfirmButton>
        </ConfirmButtonContainer>
      </ConfirmWrap>
    </>
  );
};

export default CommonConfirm;

const ConfirmBack = styled.div`
  width: 450px;
  height: 100vh;
  background: #000;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: calc(50% - 225px);
`;

const ConfirmWrap = styled.div`
  width: 400px;
  height: 150px;
  background: #8b7c67;
  border-radius: 10px;
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 200px);
`;

const ConfirmText = styled.div`
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #cabfae;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cabfae;
`;

const ConfirmButtonContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ConfirmButton = styled.div`
  width: 25%;
  height: 50%;
  background: #cabfae;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #767971;
  font-weight: 900;
  cursor: pointer;
`;
