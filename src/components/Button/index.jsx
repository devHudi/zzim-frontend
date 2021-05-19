import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background-color: #212529;
  border: none;
  font-size: 12pt;
  color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #101418;
  }
`;

export default Button;
