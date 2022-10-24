import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MultipleImage from "../assets/MultipleImage.svg";
import AddImage from "../assets/AddImage.svg";
import Logout from "../assets/Logout.svg";

import ModalPortal from "../components/ModalPortal";
import ProfileEdit from "../components/ProfileEdit";

import { UserFetch, LogoutAPI } from "../api/User";

interface Profile {
  isId?: boolean;
  isIntroduce?: boolean;
  isEdit?: boolean;
}

const Main = () => {
  // navigate
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  // id
  const [id, setId] = useState("");
  // name
  const [name, setName] = useState("");
  //introduce
  // 추후 introduce 구현
  const [introduce, setIntroduce] = useState("");

  // user api 호출
  const userFetch = async () => {
    const sessionId = localStorage.getItem("sessionId");
    if (!!sessionId) {
      const res = await UserFetch({ sessionId: sessionId });
      if (res) {
        setId(res.data.id);
        setName(res.data.name);
        setIntroduce(res.data.introduce);
      }
    }
  };

  // logout api 호출
  const logoutApi = async () => {
    const sessionId = localStorage.getItem("sessionId");
    if (!!sessionId) {
      const res = await LogoutAPI({ sessionId: sessionId });
      if (res) {
        alert("logOut!");
        // logout 과 동시에 localStorage에서 session Id 제거
        localStorage.removeItem("sessionId");
        navigate("/");
      }
    }
  };

  useEffect(() => {
    userFetch();
  }, [isModal]);

  return (
    <MainWrap>
      {/* 추후 변경 필요! */}
      <h1>Project Name</h1>
      <LogoutButton
        onClick={() => {
          logoutApi();
        }}
      >
        <img src={Logout} alt="logout_button" />
      </LogoutButton>
      {/* profile 영역 */}
      <ProfileContainer>
        <ProfileImage></ProfileImage>
        <ProfileContent>
          <ProfileText isId={true}>{id}</ProfileText>
          <ProfileText>{name}</ProfileText>
          <ProfileText isIntroduce={true}>{introduce}</ProfileText>
          <ProfileText
            isEdit={true}
            onClick={() => {
              setIsModal(true);
            }}
          >
            프로필 편집
          </ProfileText>
        </ProfileContent>
      </ProfileContainer>
      {/* image 영역 */}
      <ImageWrap>
        <ImageContainer>
          <ImageDiv>
            <MultiImage>
              <img src={MultipleImage} alt="Multi_image" />
            </MultiImage>
            1
          </ImageDiv>
          <ImageDiv>2</ImageDiv>
          <ImageDiv>3</ImageDiv>
        </ImageContainer>

        <ImageContainer>
          <ImageDiv>4</ImageDiv>
          <ImageDiv>5</ImageDiv>
          <ImageDiv>6</ImageDiv>
        </ImageContainer>

        <ImageContainer>
          <ImageDiv>7</ImageDiv>
          <ImageDiv>8</ImageDiv>
          <ImageDiv>9</ImageDiv>
        </ImageContainer>

        <ImageContainer>
          <ImageDiv>
            <MultiImage>
              <img src={MultipleImage} alt="Multi_image" />
            </MultiImage>
            1
          </ImageDiv>
          <ImageDiv>2</ImageDiv>
          <ImageDiv>3</ImageDiv>
        </ImageContainer>

        <ImageContainer>
          <ImageDiv>4</ImageDiv>
          <ImageDiv>5</ImageDiv>
          <ImageDiv>6</ImageDiv>
        </ImageContainer>

        <ImageContainer>
          <ImageDiv>7</ImageDiv>
          <ImageDiv>8</ImageDiv>
          <ImageDiv>9</ImageDiv>
        </ImageContainer>
      </ImageWrap>
      {/* image add button */}
      <AddImageContainer
        onClick={() => {
          navigate("/upload");
        }}
      >
        <AddImageDiv>
          <img src={AddImage} alt="add_image" />
        </AddImageDiv>
      </AddImageContainer>

      {isModal && (
        <ModalPortal>
          <ProfileEdit
            isModal={isModal}
            setIsModal={setIsModal}
            id={id}
            name={name}
            introduce={introduce}
          />
        </ModalPortal>
      )}
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  width: 450px;
  height: 100vh;
  overflow: auto;
  margin: 0 auto;
  background: #8b7c67;
  text-align: center;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;

  // scroll 안보이게
  &::-webkit-scrollbar {
    display: none;
  }

  & h1 {
    margin: 20px 0 0 0;
    font-size: 20px;
    font-weight: 500;
    color: #e2e2e0;
    position: relative;
  }
`;

const LogoutButton = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #cabfae;
`;

const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #000;
`;

const ProfileContent = styled.div`
  width: 200px;
  height: 100%;
  position: relative;
`;

const ProfileText = styled.div<Profile>`
  width: 100%;
  height: ${(props) => (props.isIntroduce ? "100px" : "30px")};
  color: #767971;
  font-weight: ${(props) => (props.isId ? "900" : "500")};
  text-align: ${(props) => props.isIntroduce && "left"};
  line-height: ${(props) => (props.isIntroduce ? "2" : "30px")};
  background: ${(props) => (props.isEdit ? "#E2E2E0" : "#bda68a")};
  border-radius: 10px;
  font-size: 20px;
  margin-top: 12px;
  cursor: ${(props) => props.isEdit && "pointer"};
`;

const ImageWrap = styled.div`
  width: 92%;
  overflow: hidden;
  position: relative;
  left: 4%;
  top: 25px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 133px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const ImageDiv = styled.div`
  width: 133px;
  height: 100%;
  background: #e2e2e0;
  position: relative;
`;

const MultiImage = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 5px;
  right: 5px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const AddImageContainer = styled.div`
  width: 100%;
  height: 70px;
  background: #e2e2e0;
  margin-top: 65px;
  position: sticky;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AddImageDiv = styled.div`
  width: 40px;
  height: 40px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
