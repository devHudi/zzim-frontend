import styled from "styled-components";

const Button = styled.button`
  flex: 1;
  padding: 15px 15px;
  background-color: #212529;
  border: none;
  font-size: 12pt;
  color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) =>
    props.inverted &&
    `
  background-color: #ffffff;
  border: 1px solid #212529;
  color: #212529;
  
`}

  &:hover {
    background-color: ${(props) => (props.inverted ? "#f1f3f5" : "#101418")};
  }
`;

export default Button;
