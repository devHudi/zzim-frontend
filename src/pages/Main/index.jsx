import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { VscLock } from "react-icons/vsc";
import { Header, AddItemButton, ItemCard, TextField } from "components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 5px;
  justify-items: center;
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
      <TextField />
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
