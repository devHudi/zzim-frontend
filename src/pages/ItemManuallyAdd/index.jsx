import styled from "styled-components";
import {
  PagePadding,
  Space,
  BackButton,
  Typography,
  ButtonGroup,
  Button,
} from "components";

const BackWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  display: flex;
`;

const ItemManullyAdd = () => {
  return (
    <>
      <BackWrapper>
        <BackButton />
      </BackWrapper>
      <FlexBox>
        <PagePadding>
          <Typography.Title>상품 수동추가</Typography.Title>
          <Space size={15} />
          <Typography.Subtitle>쇼핑몰 URL을 입력해주세요.</Typography.Subtitle>
          <Space size={15} />
          <input type="text" />
        </PagePadding>
      </FlexBox>
      <ButtonGroup fixed>
        <Button>다음으로</Button>
      </ButtonGroup>
    </>
  );
};

export default ItemManullyAdd;
