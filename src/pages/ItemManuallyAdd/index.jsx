import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import _, { assign } from "lodash";

import {
  PagePadding,
  Space,
  BackButton,
  Typography,
  ButtonGroup,
  Button,
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

const ItemManullyAdd = () => {
  const history = useHistory();
  const [url, setUrl] = useState("");

  useEffect(() => {
    navigator.clipboard.readText().then((clipText) => {
      if (_.includes(clipText, "https://") || _.includes(clipText, "http://")) {
        setUrl(clipText);
      }
    });
  }, []);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleNext = () => {
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
          <input type="text" value={url} onChange={handleChange} />
        </PagePadding>
      </FlexBox>
      <ButtonGroup fixed>
        <Button onClick={handleNext}>다음으로</Button>
      </ButtonGroup>
    </>
  );
};

export default ItemManullyAdd;
