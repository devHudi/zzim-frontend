import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";

const Purchased = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 50px;

  & > div {
    margin-top: 5px;
    font-size: 13pt;
  }
`;

const PurchasedDimmer = () => {
  return (
    <Purchased>
      <BiShoppingBag />
      <div> 구매함 </div>
    </Purchased>
  );
};

export default PurchasedDimmer;
