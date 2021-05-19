import styled from "styled-components";
import MDSpinner from "react-md-spinner";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  z-index: 999;

  & > div {
    margin-top: 20px;
    font-size: 9pt;
    color: white;
  }
`;

const PageSpinner = () => {
  return (
    <Wrapper>
      <MDSpinner size={40} singleColor="#f8f9fa" />
      <div>작업을 처리 중 입니다.</div>
    </Wrapper>
  );
};

export default PageSpinner;
