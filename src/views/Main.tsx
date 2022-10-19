import styled from "styled-components";

interface Profile {
  isId?: boolean;
  isIntroduce?: boolean;
  isEdit?: boolean;
}

const Main = () => {
  return (
    <MainWrap>
      {/* 추후 변경 필요! */}
      <h1>Project Name</h1>

      {/* profile 영역 */}
      <ProfileContainer>
        <ProfileImage></ProfileImage>
        <ProfileContent>
          <ProfileText isId={true}>ID</ProfileText>
          <ProfileText>Name</ProfileText>
          <ProfileText isIntroduce={true}>Introduce</ProfileText>
          <ProfileText isEdit={true}>프로필 편집</ProfileText>
        </ProfileContent>
      </ProfileContainer>

      {/* image 영역 */}
      <ImageWrap>
        <ImageContainer>
          <ImageDiv>1</ImageDiv>
          <ImageDiv>2</ImageDiv>
          <ImageDiv>3</ImageDiv>
        </ImageContainer>

        <ImageContainer>
          <ImageDiv>4</ImageDiv>
          <ImageDiv>5</ImageDiv>
          <ImageDiv>6</ImageDiv>
        </ImageContainer>
      </ImageWrap>
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
`;
