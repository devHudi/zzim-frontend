import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { VscLock } from "react-icons/vsc";
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
            <ItemCard
              name="[국내배송] 21SS 아미 스몰 하트 로고 반팔 티셔츠 네이비 E21HJ108 723"
              shop="ALAND"
              price={148000}
              thumb="https://image.a-land.co.kr/data/aland_data/images/product/11/00/10/53/37/b_1100105337.gif"
              onClick={handleItemClick}
            />
            <ItemCard
              name="메종키츠네 더블 폭스헤드 반팔 티셔츠 BU0"
              shop="MUST IT"
              price={133400}
              thumb="https://shopping-phinf.pstatic.net/main_2570920/25709205299.20210319161324.jpg?type=f640"
              onClick={handleItemClick}
            />
            <ItemCard
              name="빅 트위치 로고 티셔츠 화이트"
              shop="MUSINSA"
              price={28822}
              thumb="https://image.msscdn.net/images/goods_img/20181112/903340/903340_6_500.jpg"
              onClick={handleItemClick}
            />
            <ItemCard
              name="T-Logo Tee Black"
              shop="MUSINSA"
              price={39000}
              thumb="https://image.msscdn.net/images/goods_img/20210311/1840098/1840098_1_500.jpg"
              onClick={handleItemClick}
            />
            <ItemCard
              name="당도선별 성주 벽진참외"
              shop="Coupang"
              price={14500}
              thumb="https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2021/03/08/15/2/bbba37d0-1da7-4d22-aa0c-d0320d30fb38.jpg"
              onClick={handleItemClick}
            />
            <ItemCard
              name="[국내배송] 21SS 아미 스몰 하트 로고 반팔 티셔츠 네이비 E21HJ108 723"
              shop="ALAND"
              price={148000}
              thumb="https://image.a-land.co.kr/data/aland_data/images/product/11/00/10/53/37/b_1100105337.gif"
              onClick={handleItemClick}
            />
            <ItemCard
              name="메종키츠네 더블 폭스헤드 반팔 티셔츠 BU0"
              shop="MUST IT"
              price={133400}
              thumb="https://shopping-phinf.pstatic.net/main_2570920/25709205299.20210319161324.jpg?type=f640"
              onClick={handleItemClick}
            />
            <ItemCard
              name="빅 트위치 로고 티셔츠 화이트"
              shop="MUSINSA"
              price={28822}
              thumb="https://image.msscdn.net/images/goods_img/20181112/903340/903340_6_500.jpg"
              onClick={handleItemClick}
            />
            <ItemCard
              name="T-Logo Tee Black"
              shop="MUSINSA"
              price={39000}
              thumb="https://image.msscdn.net/images/goods_img/20210311/1840098/1840098_1_500.jpg"
              onClick={handleItemClick}
            />
            <ItemCard
              name="당도선별 성주 벽진참외"
              shop="Coupang"
              price={14500}
              thumb="https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2021/03/08/15/2/bbba37d0-1da7-4d22-aa0c-d0320d30fb38.jpg"
              onClick={handleItemClick}
            />
          </GridWrapper>
          <AddItemButton onClick={handleAddClick} />
        </>
      )}
    </>
  );
};

export default Main;
