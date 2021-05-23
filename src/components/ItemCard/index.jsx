import styled from "styled-components";
import comma from "comma-number";
import toast from "react-simple-toasts";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Image, PurchasedDimmer } from "components";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 250px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
`;

const ImageWrapper = styled.div`
  & > div {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const TextWrapper = styled.div`
  margin: 12.5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemName = styled.span`
  height: 12pt;
  margin-top: 8px;
  color: black;
  font-size: 12pt;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
`;

const ItemShop = styled.div`
  margin-top: 4px;
  color: #868e96;
  font-size: 9pt;
`;

const ItemPrice = styled.div`
  margin-top: 10px;
  font-size: 11pt;
  color: black;
  font-weight: bold;
`;

const ItemCard = ({
  name,
  shop,
  price,
  thumb,
  isPurchased,
  skeleton,
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <ImageWrapper>
        {!skeleton ? (
          <Image height="165px" src={thumb}>
            {isPurchased && <PurchasedDimmer />}
          </Image>
        ) : (
          <Skeleton height={165} />
        )}
      </ImageWrapper>
      <TextWrapper>
        <ItemName>{!skeleton ? name : <Skeleton />}</ItemName>
        <ItemShop>{!skeleton ? shop : <Skeleton />} </ItemShop>
        <ItemPrice>
          {!skeleton ? <>{comma(price)} 원</> : <Skeleton />}
        </ItemPrice>
      </TextWrapper>
    </Wrapper>
  );
};
export default ItemCard;
