import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { VscLock } from "react-icons/vsc";
import { Header, AddItemButton } from "components";

const GridWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
`;

const ItemCard = styled.div`
  height: 150px;
  background-color: #999999;
`;

const PrivateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
`;

const Icon = styled.div`
  font-size: 100pt;
`;

const Text = styled.div`
  font-size: 15pt;
`;

const Private = () => {
  return (
    <PrivateWrapper>
      <Icon>
        <VscLock />
      </Icon>
      <Text>비공개 위시리스트 입니다.</Text>
    </PrivateWrapper>
  );
};

const Main = () => {
  const history = useHistory();

  const handleItemClick = () => {
    history.push("/item-detail/item-id");
  };

  const handleAddClick = () => {
    history.push("/item-manually-add");
  };

  return (
    <>
      <Header />
      {/* <Private /> */}
      <GridWrapper>
        <ItemCard onClick={handleItemClick} />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </GridWrapper>
      <AddItemButton onClick={handleAddClick} />
    </>
  );
};

export default Main;
