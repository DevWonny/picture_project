import { SetStateAction, Dispatch } from "react";
import styled from "styled-components";

interface inputPlaceholder {
  placeHolderText: string;
  setFunction?: Dispatch<SetStateAction<string>>;
  value?: string;
}

const CommonInput = (props: inputPlaceholder) => {
  return (
    <InputContainer
      placeholder={props.placeHolderText}
      value={props.value}
      onChange={(e) => {
        if (props.setFunction) {
          props.setFunction(e.target.value);
        }
      }}
    />
  );
};

export default CommonInput;

const InputContainer = styled.input`
  width: 290px;
  height: 60px;
  background: #cabfae;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 0 0 0 10px;
  margin-bottom: 40px;
  color: #767971;
`;
