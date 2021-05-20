import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px 10px;
  font-size: 20pt;
  color: black;
  font-weight: bold;
  background-color: #212529;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 18pt;
  color: #f8f9fa;
`;

const Subtitle = styled.h2`
  font-size: 11pt;
  font-weight: normal;
  color: #adb5bd;
`;

const Header = ({ name, itemAmount }) => {
  return (
    <Wrapper>
      <Title>{name} 님의 ZZIM</Title>
      <Subtitle>{itemAmount}개의 상품이 있습니다.</Subtitle>
    </Wrapper>
  );
};

export default Header;
