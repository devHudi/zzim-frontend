import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import comma from "comma-number";
import toast from "react-simple-toasts";

import {
  PagePadding,
  MeatBallsMenu,
  BackButton,
  Image,
  Button,
  Space,
  MallLogo,
  TextField,
} from "components";
import ButtonGroup from "components/ButtonGroup";

const MenuWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  padding: 20px;
`;

const ItemName = styled.h1`
  font-weight: bold;
  font-size: 20pt;
  line-height: 1.2;
`;

const ItemPrice = styled.div`
  font-size: 15pt;
  color: #868e96;
`;

const FlexBox = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & input {
    max-width: 50%;
  }
`;

const DetailTitle = styled.span`
  font-size: 11pt;
  font-weight: bold;
`;

const DetailDesc = styled.span`
  max-width: 70%;
  font-size: 11pt;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #343a40;
`;

const PartnersInfo = styled.div`
  margin-top: 15px;
  font-size: 9pt;
  font-weight: lighter;
  color: #adb5bd;
  line-height: 1.6;
`;

const ItemDetail = () => {
  const history = useHistory();
  const [modify, setModify] = useState(false);

  const handleModify = () => {
    if (modify) {
      submitModify();
      toast("수정되었습니다.");
    }
    setModify(!modify);
  };

  const submitModify = () => {};

  const handlePurchase = () => {
    toast("구매 처리 되었습니다.");
    history.push("/");
  };

  const handleDelete = () => {
    toast("삭제 처리 되었습니다.");
    history.push("/");
  };

  const handleOutLink = () => {
    window.open("http://www.naver.com");
  };

  return (
    <>
      <MenuWrapper>
        <BackButton />
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

      <TitleWrapper>
        {modify ? (
          <TextField />
        ) : (
          <ItemName>메종키츠네 더블 폭스헤드 반팔 티셔츠 BU0</ItemName>
        )}
        <Space />
        {modify ? (
          <TextField type="number" />
        ) : (
          <ItemPrice>{comma(35000)} 원</ItemPrice>
        )}
        <Space size="20" />
      </TitleWrapper>

      <Image src="https://image.a-land.co.kr/data/aland_data/images/product/11/00/10/53/37/b_1100105337.gif"></Image>
      <Space size="20" />

      <PagePadding>
        <FlexBox>
          <DetailTitle>배송비</DetailTitle>
          {modify ? (
            <TextField type="number" small right />
          ) : (
            <DetailDesc>{comma(2500)} 원</DetailDesc>
          )}
        </FlexBox>

        <FlexBox>
          <DetailTitle>쇼핑몰</DetailTitle>
          <MallLogo mall="coupang" height="15px" />
        </FlexBox>

        <FlexBox>
          <DetailTitle>담은 날짜</DetailTitle>
          <DetailDesc>
            {moment(new Date()).format("YYYY년 MM월 DD일")}
          </DetailDesc>
        </FlexBox>

        <Space size="20" />

        <ButtonGroup>
          <Button onClick={handleOutLink}> 상품 바로가기</Button>
        </ButtonGroup>
        <PartnersInfo>
          해당 링크를 통해 제품 구매가 이루어진 경우 쿠팡 파트너스 활동 일환으로
          인해 일정 수수료가 어플리케이션 제공자에게 지급될 수 있습니다.
        </PartnersInfo>
      </PagePadding>
    </>
  );
};

export default ItemDetail;
