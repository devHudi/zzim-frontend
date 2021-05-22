import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import comma from "comma-number";
import toast from "react-simple-toasts";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { showSpinner, hideSpinner } from "states/spinner";
import {
  getItemDetail,
  updateItemDetail,
  purchaseItem,
  removeItem,
} from "apis/Item";

import {
  PagePadding,
  MeatBallsMenu,
  BackButton,
  Image,
  Button,
  Space,
  TextField,
  ButtonGroup,
} from "components";

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

const Logo = styled.img`
  height: 11pt;
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
  const dispatch = useDispatch();
  const history = useHistory();
  const [modify, setModify] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItemDetail("itemId");
      setItem(item);
    };

    fetchItem();
  }, []);

  const submitModify = async () => {
    dispatch(showSpinner());
    const { name, price, shippingPrice } = item;
    const newItem = await updateItemDetail("item1", name, price, shippingPrice);
    setItem(newItem);
    dispatch(hideSpinner());
  };

  const handleModify = async () => {
    if (modify) {
      await submitModify();
      toast("수정되었습니다.");
    }
    setModify(!modify);
  };

  const handlePurchase = async () => {
    dispatch(showSpinner());
    await purchaseItem("itemId");
    toast("구매 처리 되었습니다.");
    history.push("/");
    dispatch(hideSpinner());
  };

  const handleDelete = async () => {
    dispatch(showSpinner());
    await removeItem("itemId");
    toast("삭제 처리 되었습니다.");
    history.push("/");
    dispatch(hideSpinner());
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
          <TextField
            value={item?.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
        ) : (
          <ItemName>{item?.name || <Skeleton />}</ItemName>
        )}
        <Space />
        {modify ? (
          <TextField
            value={item?.price}
            type="number"
            onChange={(e) => setItem({ ...item, price: e.target.value })}
          />
        ) : (
          <ItemPrice>
            {item?.price ? (
              <>{comma(item.price)} 원</>
            ) : (
              <Skeleton width={100} />
            )}
          </ItemPrice>
        )}
        <Space size="20" />
      </TitleWrapper>

      {item?.image ? (
        <Image src={item.image}></Image>
      ) : (
        <Skeleton height={300} />
      )}

      <Space size="20" />

      <PagePadding>
        <FlexBox>
          <DetailTitle>배송비</DetailTitle>
          {modify ? (
            <TextField
              value={item?.shippingPrice}
              type="number"
              small
              right
              onChange={(e) =>
                setItem({ ...item, shippingPrice: e.target.value })
              }
            />
          ) : (
            <DetailDesc>
              {item?.shippingPrice ? (
                <>{comma(item.shippingPrice)} 원</>
              ) : (
                <Skeleton width={100} />
              )}
            </DetailDesc>
          )}
        </FlexBox>

        <FlexBox>
          <DetailTitle>쇼핑몰</DetailTitle>

          {item?.logoImage ? (
            <Logo src={item.logoImage} />
          ) : (
            <Skeleton width={100} />
          )}
        </FlexBox>

        <FlexBox>
          <DetailTitle>담은 날짜</DetailTitle>
          <DetailDesc>
            {item?.createdDate ? (
              <>{moment(item.createdDate).format("YYYY년 MM월 DD일")}</>
            ) : (
              <Skeleton width={100} />
            )}
          </DetailDesc>
        </FlexBox>

        <Space size="20" />

        <ButtonGroup>
          <Button disabled={!item?.url} onClick={() => window.open(item?.url)}>
            상품 바로가기
          </Button>
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
