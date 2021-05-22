import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import toast from "react-simple-toasts";
import { addItem } from "apis/Item";
import styled from "styled-components";
import MDSpinner from "react-md-spinner";
import moment from "moment";
import comma from "comma-number";

import {
  Modal,
  Image,
  Typography,
  Space,
  Button,
  MallLogo,
  TextField,
} from "components";

const FlexBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 10pt;
`;

const Fetching = () => {
  const history = useHistory();

  useEffect(() => {
    const handleFetch = async () => {
      const result = await addItem("https://item.url");
      if (result) history.push("/add-complete");
      else history.push("/not-supported");
    };

    handleFetch();
  }, [history]);

  return (
    <FlexBox>
      <MDSpinner size={50} singleColor="#868e96" />
      <Text> 상품 정보를 불러오는 중 입니다. </Text>
    </FlexBox>
  );
};

export default Fetching;
