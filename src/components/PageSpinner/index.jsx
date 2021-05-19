import styled from "styled-components";
import MDSpinner from "react-md-spinner";

import { Dimmer } from "components";

const Wrapper = styled(Dimmer)`
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
