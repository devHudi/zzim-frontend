import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { VscLock } from "react-icons/vsc";
import { RiWindyFill } from "react-icons/ri";
import { getUserItems } from "apis/Item";
import {
  Header,
  AddItemButton,
  ItemCard,
  ButtonGroup,
  Button,
  Space,
} from "components";
import { createGlobalStyle } from "styled-components";

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

const PrivateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;

  & > div {
    text-align: center;
  }
`;

const Icon = styled.div`
  font-size: 100pt;
`;

const Text = styled.div`
  font-size: 15pt;
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

const Private = () => {
  const history = useHistory();

  return (
    <PrivateWrapper>
      <div>
        <Icon>
          <VscLock />
        </Icon>
        <Text>비공개 ZZIM 입니다.</Text>
        <Space size="30" />
        <ButtonGroup>
          <Button onClick={() => history.push("/")}>내 ZZIM 으로</Button>
        </ButtonGroup>
      </div>
    </PrivateWrapper>
  );
};

const Main = ({ noPublic }) => {
  const history = useHistory();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getUserItems();
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

  return (
    <>
      <GlobalStyle />
      <Header name="" itemAmount={items.length} />
      {noPublic ? (
        <Private />
      ) : (
        <>
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
      )}
    </>
  );
};

export default Main;
