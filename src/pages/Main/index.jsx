import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { RiWindyFill } from "react-icons/ri";
import { getUserItems } from "apis/Item";
import toast from "react-simple-toasts";
import { Header, AddItemButton, ItemCard, MeatBallsMenu } from "components";
import { signOut } from "apis/Auth";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f9fa;
  }
`;

const GridWrapper = styled.div`
  max-width: 100%;
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  justify-items: center;
`;

const EmptyWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  color: #adb5bd;
  font-weight: bold;
`;

const EmptyIconWrapper = styled.div`
  font-size: 100px;
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const Empty = () => {
  return (
    <EmptyWrapper>
      <EmptyIconWrapper>
        <RiWindyFill />
      </EmptyIconWrapper>
      <br />
      아무 상품도 없어요.
    </EmptyWrapper>
  );
};

const Main = () => {
  const { id } = useParams();
  const history = useHistory();
  const [items, setItems] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getUserItems(id);
      if (!items) {
        toast("로그인을 해주세요.");
        history.push("/sign");
        return;
      }
      setItems(items);
    };
    fetchItems();
  }, []);

  const handleItemClick = (id) => {
    history.push(`/item-detail/${id}`);
  };

  const handleAddClick = () => {
    history.push("/item-manually-add");
  };

  const handleShare = async () => {
    await navigator.clipboard.writeText("http://zzim.app");
    toast("위시리스트 주소가 복사되었습니다.");
  };

  const handleSignOut = async () => {
    await signOut();
    toast("로그아웃 되었습니다.");
    history.push("/sign");
  };

  return (
    <>
      <GlobalStyle />
      <Header name={user.username} itemAmount={items.length} />
      <MenuWrapper>
        <MeatBallsMenu white left>
          <MeatBallsMenu.Menu onClick={handleShare}>
            공유하기
          </MeatBallsMenu.Menu>
          <MeatBallsMenu.Menu onClick={handleSignOut}>
            로그아웃
          </MeatBallsMenu.Menu>
        </MeatBallsMenu>
      </MenuWrapper>
      {items ? (
        <>
          {items.length === 0 ? (
            <Empty />
          ) : (
            <GridWrapper>
              {items.map((item) => (
                <ItemCard
                  name={item.name}
                  shop={item.shoppingMallName}
                  price={item.price}
                  thumb={item.image}
                  isPurchased={item.purchased}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </GridWrapper>
          )}
        </>
      ) : (
        <GridWrapper>
          <ItemCard skeleton />
          <ItemCard skeleton />
          <ItemCard skeleton />
          <ItemCard skeleton />
          <ItemCard skeleton />
        </GridWrapper>
      )}
      <AddItemButton onClick={handleAddClick} />
    </>
  );
};

export default Main;
