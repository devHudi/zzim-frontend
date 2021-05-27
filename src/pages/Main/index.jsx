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
  z-index: 900;
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
      const res = await getUserItems(id);
      if (res === 0) {
        toast("로그인을 해주세요.");
        history.push("/sign");
        return;
      } else if (res === 1) {
        toast("존재하지 않는 위시리스트입니다.");
        history.push("/");
        return;
      }
      setItems(res);
    };
    fetchItems();
  }, [id, history]);

  const handleItemClick = (itemId, url) => {
    if (id) {
      window.open(url);
      return;
    }

    history.push(`/item-detail/${itemId}`);
  };

  const handleAddClick = () => {
    history.push("/item-manually-add");
  };

  const handleShare = async () => {
    if (id) {
      await navigator.clipboard.writeText(`https://zzim.app/${id}`);
      toast("위시리스트 주소가 복사되었습니다.");
    } else {
      await navigator.clipboard.writeText(
        `https://zzim.app/${localStorage.getItem("username")}`
      );
      toast("위시리스트 주소가 복사되었습니다.");
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast("로그아웃 되었습니다.");
    history.push("/sign");
  };

  return (
    <>
      <GlobalStyle />
      <Header
        name={id || localStorage.getItem("username")}
        itemAmount={items.length}
      />
      <MenuWrapper>
        <MeatBallsMenu white left>
          {id && (
            <MeatBallsMenu.Menu onClick={() => history.push("/")}>
              나의 <br />
              위시리스트
            </MeatBallsMenu.Menu>
          )}
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
                  onClick={() => handleItemClick(item.id, item.url)}
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
