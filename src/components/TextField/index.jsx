import styled from "styled-components";

const TextField = styled.input`
  width: 100%;
  border: 1px solid #c7ced5;
  border-radius: 7px;
  padding: 10px;
  font-size: 11pt;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #495057;
  }
`;

export default TextField;
