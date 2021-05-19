import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;

  & > button {
    flex: 1;
  }

  ${(props) =>
    props.fixed &&
    `position: fixed;
bottom: 0;
left: 0;
width: 100%;
`}
`;

export default ButtonGroup;
