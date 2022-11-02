import React, { SetStateAction, Dispatch, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "../assets/CloseIcon.svg";

import CommonSubmit from "../components/CommonSubmit";
import CommonConfirm from "../components/CommonConfirm";

import ModalPortal from "./ModalPortal";

import Loading from "./Loading";
interface props {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  id?: string;
  password?: string;
  name?: string;
  introduce?: string;
}

const ProfileEdit = (props: props) => {
  // edit Id
  const [editId, setEditId] = useState("");

  // edit name
  const [editName, setEditName] = useState("");

  // edit introduce
  const [editIntroduce, setEditIntroduce] = useState("");

  // edit submit state
  const [isEdit, setIsEdit] = useState(false);

  // 회원탈퇴 state
  const [isWithdrawal, setIsWithdrawal] = useState(false);

  // 탈퇴 loading state
  const [isLoading, setIsLoading] = useState(false);
  // 정보수정 loading state
  const [isEditLoading, setIsEditLoading] = useState(false);

  useEffect(() => {
    if (!!props.id && !!props.name && !!props.introduce) {
      setEditId(props.id);
      setEditName(props.name);
      setEditIntroduce(props.introduce);
    }
  }, [props]);

  useEffect(() => {
    if (
      props.id !== editId ||
      props.name !== editName ||
      props.introduce !== editIntroduce
    ) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [editId, editIntroduce, editName, props.id, props.introduce, props.name]);

  return (
    <>
      <EditBack />
      <EditWrap>
        <EditCloseButton onClick={() => props.setIsModal(false)}>
          <img src={CloseIcon} alt="close_icon" />
        </EditCloseButton>
        <h1>Profile Edit</h1>
        <EditInput
          placeholder="ID"
          value={editId}
          onChange={(e) => setEditId(e.target.value)}
        />

        {/* 추후 변경 예정 */}
        <EditInput placeholder="PW" type="password" />
        <EditInput
          placeholder="Name"
          value={editName}
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
        <EditInput
          placeholder="Introduce"
          value={editIntroduce}
          isLast={true}
          onChange={(e) => setEditIntroduce(e.target.value)}
        />
        <CommonSubmit
          submitText="Change"
          isState={isEdit}
          name={editName}
          introduce={editIntroduce}
          setIsModal={props.setIsModal}
          setIsEditLoading={setIsEditLoading}
        />

        <DeleteButton>
          <span
            onClick={() => {
              setIsWithdrawal(true);
            }}
          >
            회원탈퇴
          </span>
        </DeleteButton>
      </EditWrap>

      {isWithdrawal && (
        <ModalPortal>
          <CommonConfirm
            setIsConfirm={setIsWithdrawal}
            isText={"withdrawal"}
            setIsLoading={setIsLoading}
          />
        </ModalPortal>
      )}

      {isLoading && <Loading loadingText="회원 탈퇴 진행 중..." />}
      {isEditLoading && <Loading loadingText="회원 정보 변경 중..." />}
    </>
  );
};

export default ProfileEdit;
const EditBack = styled.div`
  width: 450px;
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: calc(50% - 225px);
`;

const EditWrap = styled.div`
  width: 350px;
  height: 80%;
  background: #bda68a;
  position: absolute;
  top: 10%;
  left: calc(50% - 175px);
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: #e2e2e0;
    font-size: 30px;
    text-align: center;
    margin: 0;
    font-weight: 500;
  }
`;

const EditCloseButton = styled.div`
  width: 27px;
  height: 27px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const EditInput = styled.input<{ isLast?: boolean }>`
  width: 290px;
  height: 60px;
  background: #cabfae;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 0 0 0 10px;
  margin-top: 40px;
  margin-bottom: ${(props) => props.isLast && "40px"};
  color: #767971;
`;

const DeleteButton = styled.p`
  margin: 10px 0 0 0;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #767971;

  & span {
    cursor: pointer;
  }
`;
