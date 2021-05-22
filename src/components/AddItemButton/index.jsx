import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 30px;
  color: #ffffff;
  background-color: #7950f2;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6741d9;
  }
`;

const AddItemButton = ({ onClick }) => {
  return (
    <Icon onClick={onClick}>
      <AiOutlinePlus />
    </Icon>
  );
};
export default AddItemButton;
