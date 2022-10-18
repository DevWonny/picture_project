import styled from "styled-components";

interface submitType {
  submitText: string;
  isState?: boolean;
}

const CommonSubmit = (props: submitType) => {
  return (
    <CommonSubmitContainer isSubmit={!!props.isState}>
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
