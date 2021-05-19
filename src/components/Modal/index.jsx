import styled from "styled-components";
import { Dimmer } from "components";

const Wrapper = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const Body = styled.div`
  padding: 50px 30px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;

  & > button {
    flex: 1;
  }
`;

const Modal = ({ children, buttons }) => {
  return (
    <Dimmer>
      <Wrapper>
        <Body>{children}</Body>
        <ButtonWrapper>{buttons}</ButtonWrapper>
      </Wrapper>
    </Dimmer>
  );
};

export default Modal;
