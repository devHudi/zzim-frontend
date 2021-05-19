import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import comma from "comma-number";

import {
  PagePadding,
  MeatBallsMenu,
  BackButton,
  Image,
  Typography,
  Space,
  MallLogo,
} from "components";

const BackWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ItemDetail = () => {
  const [modify, setModify] = useState(false);

  const handleModify = () => {
    if (modify) {
      submitModify();
      alert("수정되었습니다.");
    }
    setModify(!modify);
  };

  const submitModify = () => {};

  const handlePurchase = () => {};

  const handleDelete = () => {};

  return (
    <>
      <Image src="https://s3.ap-northeast-2.amazonaws.com/productmain/20210417_637542253839755265_3019034_0.jpg">
        <BackWrapper>
          <BackButton />
        </BackWrapper>
        <MenuWrapper>
          <MeatBallsMenu left>
            <MeatBallsMenu.Menu onClick={handleModify} blue={modify}>
              {modify ? "수정완료" : "수정하기"}
            </MeatBallsMenu.Menu>
            <MeatBallsMenu.Menu onClick={handlePurchase}>
              구매완료
            </MeatBallsMenu.Menu>
            <MeatBallsMenu.Menu onClick={handleDelete} red>
              삭제하기
            </MeatBallsMenu.Menu>
          </MeatBallsMenu>
        </MenuWrapper>
      </Image>
      <PagePadding>
        {
          // waiting for TextField component
        }
        <Typography.FormTitle>상품명</Typography.FormTitle>
        {modify ? (
          <input type="text" />
        ) : (
          <Typography.FormValue>예쁜반팔</Typography.FormValue>
        )}
        <Space />
        <Typography.FormTitle>가격</Typography.FormTitle>{" "}
        {modify ? (
          <input type="text" />
        ) : (
          <Typography.FormValue>{comma(35000)} 원</Typography.FormValue>
        )}
        <Space />
        <Typography.FormTitle>배송비</Typography.FormTitle>
        {modify ? (
          <input type="text" />
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
      </PagePadding>
    </>
  );
};

export default ItemDetail;
