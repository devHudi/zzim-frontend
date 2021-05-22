import styled from "styled-components";
import coupang from "./imgs/coupang.png";

const Image = styled.img`
  height: ${(props) => props.height || "25px"};
`;

const mallList = {
  coupang,
};

const MallLogo = ({ mall, height }) => {
  return <Image src={mallList[mall]} height={height} />;
};

export default MallLogo;
