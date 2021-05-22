import styled from "styled-components";

const Button = styled.button`
  flex: 1;
  padding: 15px 15px;
  background-color: #212529;
  border: none;
  font-size: 12pt;
  color: #f8f9fa;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;

  ${(props) =>
    props.disabled &&
    `
  background-color: #dee2e6;
  border: 1px solid #dee2e6;
  color: #868e96;
`}
`;

export default Button;
