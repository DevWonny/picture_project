import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  // navigate
  const navigate = useNavigate();

  return (
    <IntroWrap>
      <Title>An Unfinished Story</Title>

      <IntroButton sign={false} onClick={() => navigate("/login")}>
        Login
      </IntroButton>
      <IntroButton sign={true} onClick={() => navigate("/signup")}>
        Sign Up
      </IntroButton>
    </IntroWrap>
  );
};

export default Intro;

const IntroWrap = styled.div`
  max-width: 450px;
  height: 100vh;
  background: #8b7c67;
  position: relative;
  margin: 0 auto;
  text-align: center;
  line-height: 100vh;
`;

const Title = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
`;

const IntroButton = styled.div<{ sign: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  background-color: #cabfae;
  color: #767971;
  font-size: 20px;
  position: absolute;
  bottom: 130px;
  left: ${(props) => !props.sign && "75px"};
  right: ${(props) => props.sign && "75px"};
  cursor: pointer;
`;
