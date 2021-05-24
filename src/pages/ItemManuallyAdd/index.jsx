import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "states/form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import _ from "lodash";
import toast from "react-simple-toasts";

import {
  PagePadding,
  Space,
  BackButton,
  Typography,
  ButtonGroup,
  Button,
  TextField,
} from "components";

const BackWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  display: flex;
`;

const checkUrl = (text) => {
  if (text.substr(0, 7) === "http://" || text.substr(0, 8) === "https://") {
    return true;
  }
};

const ItemManullyAdd = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    navigator.clipboard.readText().then((clipText) => {
      if (checkUrl(clipText)) {
        setInput(clipText);
        toast("복사된 URL을 자동으로 입력합니다.");
      }
    });
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleNext = () => {
    dispatch(setUrl(input));
    history.push("/fetching");
  };

  return (
    <>
      <BackWrapper>
        <BackButton />
      </BackWrapper>
      <FlexBox>
        <PagePadding>
          <Typography.Title>상품 수동추가</Typography.Title>
          <Space size={15} />
          <Typography.Subtitle>쇼핑몰 URL을 입력해주세요.</Typography.Subtitle>
          <Space size={15} />
          <TextField value={input} onChange={handleChange} />
        </PagePadding>
      </FlexBox>
      <ButtonGroup fixed>
        <Button onClick={handleNext}>다음으로</Button>
      </ButtonGroup>
    </>
  );
};

export default ItemManullyAdd;
