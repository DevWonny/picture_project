import styled from "styled-components";

interface submitType {
  submitText: string;
}

const CommonSubmit = (props: submitType) => {
  return <CommonSubmitContainer>{props.submitText}</CommonSubmitContainer>;
};

export default CommonSubmit;

const CommonSubmitContainer = styled.div`
  width: 300px;
  height: 60px;
  background: #e2e2e0;
  border-radius: 10px;
  color: #767971;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;
