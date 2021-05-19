import styled from "styled-components";
import { Dimmer } from "components";

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 500px;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const Body = styled.div`
  position: relative;
  height: 400px;
  padding: 20px;
  overflow: scroll;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
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
