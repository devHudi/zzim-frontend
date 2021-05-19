import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUrl } from "states/form";
import styled from "styled-components";

import { Space, Button } from "components";

const FlexBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & button {
    width: 100%;
  }
`;

const Oops = styled.div`
  font-size: 30pt;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 13pt;
`;

const NotSupported = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearUrl());
    history.push("/");
  };

  return (
    <FlexBox>
      <div>
        <Oops>Oops...</Oops>
        <Space size={20} />
        <Text>아직 지원하지 않는 쇼핑몰입니다.</Text>
        <Space size={40} />
        <Button onClick={handleClick}> 돌아가기 </Button>
      </div>
    </FlexBox>
  );
};

export default NotSupported;
