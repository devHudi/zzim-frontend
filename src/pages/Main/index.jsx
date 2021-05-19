import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { VscLock } from "react-icons/vsc";

const Header = styled.div`
  height: 100px;
  background-color: black;
`;

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

const AddItemButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: blue;
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
      <AddItemButton onClick={handleAddClick}>+</AddItemButton>
    </>
  );
};

export default Main;
