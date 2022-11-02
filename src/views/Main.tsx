import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddImage from "../assets/AddImage.svg";
import Logout from "../assets/Logout.svg";

import ModalPortal from "../components/ModalPortal";
import ProfileEdit from "../components/ProfileEdit";
import CommonConfirm from "../components/CommonConfirm";
import Loading from "../components/Loading";

import { UserFetch } from "../api/User";
import { ImageGetAPI } from "../api/Image";

interface Profile {
  isId?: boolean;
  isIntroduce?: boolean;
  isEdit?: boolean;
}

const Main = () => {
  // navigate
  const navigate = useNavigate();
  // profile Modal state
  const [isModal, setIsModal] = useState(false);
  // id
  const [id, setId] = useState("");
  // name
  const [name, setName] = useState("");
  //introduce
  const [introduce, setIntroduce] = useState("");
  // image List
  const [imageList, setImageList] = useState<any[]>([]);
  // logout Modal State
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  // last Id
  const [lastId, setLastId] = useState("");
  // useRef - infinite scroll
  const infiniteRef = useRef<HTMLDivElement>(null);
  // pagination index
  const [paginationIndex, setPaginationIndex] = useState(0);
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // image Loading state
  const [isImageLoading, setIsImageLoading] = useState(false);
  // user loading state
  const [isUserLoading, setIsUserLoading] = useState(false);

  // user api 호출
  const userFetch = async () => {
    const sessionId = localStorage.getItem("sessionId");
    if (!isUserLoading) {
      setIsUserLoading(true);
    }

    if (!!sessionId) {
      const res = await UserFetch({ sessionId: sessionId });
      if (res) {
        setId(res.data.id);
        setName(res.data.name);
        setIntroduce(res.data.introduce);
        setIsUserLoading(false);
      }
    }
  };

  // image get api
  const imageGetApi = async () => {
    if (!isImageLoading) {
      setIsImageLoading(true);
    }

    if (lastId) {
      const res = await ImageGetAPI({ lastId: lastId });

      if (res.length > 0) {
        setLastId(res[res.length - 1]._id);
        setImageList((prev) => [...prev, ...res]);
        setIsImageLoading(false);
      }
    } else {
      const res = await ImageGetAPI();
      if (res) {
        setLastId(res[res.length - 1]._id);
        setImageList(res);
        setIsImageLoading(false);
      }
    }
  };

  // observer
  const onIntersect = async ([entry]: any, observer: any) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setPaginationIndex(paginationIndex + 1);
    }

    observer.observe(entry.target);
  };

  // detail page
  const detailLink = (params: string, detailId: string, id: string) => {
    navigate(`/detail/${params}`, { state: { detailId, id } });
  };

  // user data get useEffect
  useEffect(() => {
    userFetch();
  }, [isModal]);

  // image GET useEffect
  // image list initialize
  useEffect(() => {
    imageGetApi();
  }, [paginationIndex]);

  useEffect(() => {
    let observer: any;
    if (infiniteRef.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });

      observer.observe(infiniteRef.current);
    }

    return () => observer && observer.disconnect();
  }, [onIntersect]);

  return (
    <>
      <MainWrap>
        {/* 추후 변경 필요! */}
        <h1>An Unfinished Story</h1>

        {/* logout button */}
        <LogoutButton
          onClick={() => {
            setIsLogoutModal(true);
          }}
        >
          <img src={Logout} alt="logout_button" />
        </LogoutButton>

        {/* profile 영역 */}
        <ProfileContainer>
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
        <ImageWrap isImage={imageList.length > 0}>
          {imageList.length > 0 ? (
            imageList.map((el, index) => {
              return (
                <ImageDiv
                  key={`picture_project_main_key_${index}`}
                  onClick={() => {
                    detailLink(el.key, el._id, id);
                  }}
                >
                  <img
                    src={`http://localhost:5000/uploads/${el.key}`}
                    alt="main_image"
                  />
                </ImageDiv>
              );
            })
          ) : (
            <NoImageText>첫 이미지를 올려주세요!</NoImageText>
          )}
          {imageList.length > 0 && <ObserveDiv ref={infiniteRef} />}
        </ImageWrap>

        {/* image add button */}
        <AddImageContainer
          onClick={() => {
            // upload 페이지의 Header부분에 ID를 출력하기 위해 state로 id 값 넘겨줌
            navigate("/upload", { state: id });
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

        {isLogoutModal && (
          <ModalPortal>
            <CommonConfirm
              setIsConfirm={setIsLogoutModal}
              isText={"logout"}
              setIsLoading={setIsLoading}
            />
          </ModalPortal>
        )}
      </MainWrap>

      {isLoading && <Loading loadingText="로그아웃 진행 중..." />}
      {isImageLoading && <Loading loadingText="이미지 가져오는 중..." />}
      {isUserLoading && <Loading loadingText="유저 정보 가져오는 중..." />}
    </>
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

const ProfileContent = styled.div`
  width: 92%;
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

const ImageWrap = styled.div<{ isImage: boolean }>`
  width: 92%;
  overflow: hidden;
  position: relative;
  left: 4%;
  top: 25px;
  display: flex;
  flex-wrap: ${(props) => (props.isImage ? "wrap" : "nowrap")};
  justify-content: ${(props) => (props.isImage ? "space-between" : "center")};
  align-items: ${(props) => props.isImage && "center"};
`;

const ImageDiv = styled.div`
  width: 133px;
  height: 133px;
  background: #e2e2e0;
  position: relative;
  margin-bottom: 10px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const NoImageText = styled.p`
  font-size: 30px;
  color: #e2e2e0;
`;

// const MultiImage = styled.div`
//   width: 15px;
//   height: 15px;
//   position: absolute;
//   top: 5px;
//   right: 5px;

//   & img {
//     width: 100%;
//     height: 100%;
//   }
// `;

const AddImageContainer = styled.div`
  width: 450px;
  height: 70px;
  background: #e2e2e0;
  margin-top: 65px;
  position: fixed;
  left: calc(50% - 225px);
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

const ObserveDiv = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 50px;
`;
