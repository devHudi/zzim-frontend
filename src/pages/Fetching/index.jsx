import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import toast from "react-simple-toasts";
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

const dummyItem = {};

const Fetching = () => {
  const history = useHistory();
  const form = useSelector((state) => state.form);
  const [item, setItem] = useState();
  const [modify, setModify] = useState(false);

  const handleModify = () => {
    if (modify) {
      toast("수정되었습니다.");
    }
    setModify(!modify);
  };

  const handleConfirm = () => {
    history.push("/add-complete");
  };

  useEffect(() => {
    setTimeout(() => {
      history.push("/add-complete");
      // setItem(dummyItem);
    }, 3000);
  }, []);

  console.log(form.url);

  return (
    <FlexBox>
      {item && (
        <Modal
          buttons={[
            <Button onClick={handleModify}>
              {modify ? "수정완료" : "수정하기"}
            </Button>,
            <Button onClick={handleConfirm}> 상품담기 </Button>,
          ]}
        >
          <Image
            src="https://s3.ap-northeast-2.amazonaws.com/productmain/20210417_637542253839755265_3019034_0.jpg"
            height="200px"
          />
          <Typography.FormTitle>상품명</Typography.FormTitle>
          {modify ? (
            <TextField></TextField>
          ) : (
            <Typography.FormValue>예쁜반팔</Typography.FormValue>
          )}
          <Space />
          <Typography.FormTitle>가격</Typography.FormTitle>{" "}
          {modify ? (
            <TextField></TextField>
          ) : (
            <Typography.FormValue>{comma(35000)} 원</Typography.FormValue>
          )}
          <Space />
          <Typography.FormTitle>배송비</Typography.FormTitle>
          {modify ? (
            <TextField></TextField>
          ) : (
            <Typography.FormValue>{comma(2500)} 원</Typography.FormValue>
          )}
          <Space />
          <Typography.FormTitle>쇼핑몰</Typography.FormTitle>
          <Typography.FormValue blue pointer>
            <MallLogo mall="coupang" />
          </Typography.FormValue>
          <Space />
          <Typography.FormTitle>상품 URL</Typography.FormTitle>
          <Typography.FormValue blue pointer>
            https://www.naver.com
          </Typography.FormValue>
          <Space />
          <Typography.FormTitle>담은 날짜</Typography.FormTitle>
          <Typography.FormValue>
            {moment(new Date()).format("YYYY년 MM월 DD일")}
          </Typography.FormValue>
        </Modal>
      )}
      <MDSpinner size={50} singleColor="#868e96" />
      <Text> 상품 정보를 불러오는 중 입니다. </Text>
    </FlexBox>
  );
};

export default Fetching;
