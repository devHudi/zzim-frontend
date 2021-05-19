import styled from "styled-components";
import coupang from "./imgs/coupang.png";

const Image = styled.img`
  height: 25px;
`;

const mallList = {
  coupang,
};

const MallLogo = ({ mall }) => {
  return <Image src={mallList[mall]} />;
};

export default MallLogo;
