import styled from "styled-components";
import comma from "comma-number";
import toast from "react-simple-toasts";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Image, MeatBallsMenu } from "components";
import { IoHeart } from "react-icons/io5";

const Wrapper = styled.div`
  cursor: pointer;
  width: 400px;
  height: 400px;
  box-shadow: 3px 3px 10px 3px #ced4da;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const ItemShop = styled.div`
  color: black;
  font-size: 12pt;
  margin: 8px 10px;
  padding-top: 5px;
`;

const ItemName = styled.div`
  color: black;
  font-size: 13pt;
  margin: 5px 9px;
  padding-top: 2px;
`;

const ItemPrice = styled.div`
  font-size: 14pt;
  color: black;
  font-weight: bold;
  margin-left: 9px;
  margin-top: -25px;
`;

const WrapperCard = styled.div`
  position: relative;
  top: -50px;
  left: 358px;
  z-index: 1;
`;

const Heart = styled.div`
  cursor: pointer;
  color: white;
  font-size: 31px;
  position: relative;
  top: -130px;
  left: 357px;
  z-index: 1;
  &:hover {
    color: #ff8787;
  }
`;

const ItemCard = ({ onClick }) => {
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
      <Image src="http://placehold.it/300x200?text=sample" />
      <ItemShop>신세계몰(쇼핑몰 이름)</ItemShop>
      <ItemName> 상품 이름 </ItemName>

      <WrapperCard>
        <MeatBallsMenu>
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
      </WrapperCard>
      <ItemPrice>{comma(30000)} 원</ItemPrice>
      <Heart>
        <IoHeart></IoHeart>
      </Heart>
    </Wrapper>
  );
};
export default ItemCard;
