import styled from "styled-components";
import comma from "comma-number";
import toast from "react-simple-toasts";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Image, MeatBallsMenu } from "components";
import { IoHeart } from "react-icons/io5";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 250px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
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

const ItemCard = ({ name, shop, price, thumb, onClick }) => {
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

  return (
    <Wrapper onClick={onClick}>
      <ImageWrapper>
        <Image height="165px" src={thumb} />
      </ImageWrapper>
      <TextWrapper>
        <ItemName> {name} </ItemName>
        <ItemShop> {shop} </ItemShop>
        <ItemPrice> {comma(price)} 원 </ItemPrice>
      </TextWrapper>
    </Wrapper>
  );
};
export default ItemCard;
