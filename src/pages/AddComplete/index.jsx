import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUrl } from "states/form";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";

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

const Icon = styled.div`
  text-align: center;
  font-size: 50pt;
  font-weight: bold;
  color: #2b8a3e;
`;

const Text = styled.div`
  font-size: 13pt;
`;

const NotSupported = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUrl());
  }, [dispatch]);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <FlexBox>
      <div>
        <Icon>
          <BsCheck />
        </Icon>
        <Space size={20} />
        <Text>상품이 성공적으로 담아졌습니다.</Text>
        <Space size={40} />
        <Button onClick={handleClick}> 확인 </Button>
      </div>
    </FlexBox>
  );
};

export default NotSupported;
