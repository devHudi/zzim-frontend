import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { VscLock } from "react-icons/vsc";
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
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getUserItems("userId");
      setItems(items);
    };
    fetchItems();
  }, []);

  const handleItemClick = () => {
    history.push("/item-detail/item-id");
  };

  const handleAddClick = () => {
    history.push("/item-manually-add");
  };

  return (
    <>
      <GlobalStyle />
      <Header name="thanos50per" itemAmount={17} />
      {noPublic ? (
        <Private />
      ) : (
        <>
          <GridWrapper>
            {items ? (
              items.map((item) => (
                <ItemCard
                  name={item.name}
                  shop={item.shoppingMallName}
                  price={item.price}
                  thumb={item.image}
                  onClick={handleItemClick}
                />
              ))
            ) : (
              <>
                <ItemCard skeleton />
                <ItemCard skeleton />
                <ItemCard skeleton />
                <ItemCard skeleton />
                <ItemCard skeleton />
              </>
            )}
          </GridWrapper>
          <AddItemButton onClick={handleAddClick} />
        </>
      )}
    </>
  );
};

export default Main;
