import { useState } from "react";
import styled from "styled-components";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Wrapper = styled.span`
  position: relative;
`;

const Icon = styled.span`
  cursor: pointer;
  font-size: 28px;
  color: ${(props) => (props.white ? "#ffffff" : "#212529")};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.white ? "#f1f3f5" : "#343a40")};
  }
`;

const MenuWrapper = styled.ul`
  position: absolute;
  top: 30px;
  right: ${(props) => (props.left ? 0 : "inherit")};
  border: 1px solid #f1f3f5;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
`;

const Menu = styled.li`
  min-width: 70px;
  padding: 10px;
  border-bottom: 1px solid #f1f3f5;
  font-size: 10pt;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  color: ${(props) => props.red && "#e03131"};
  color: ${(props) => props.green && "#2f9e44"};
  color: ${(props) => props.blue && "#1971c2"};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f1f3f5;
  }
`;

const MeatBallsMenu = ({ children, left, white }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <Icon onClick={handleClick} white={white}>
        <HiOutlineDotsHorizontal />
      </Icon>

      {visible && (
        <MenuWrapper left={left} onClick={handleClick}>
          {children}
        </MenuWrapper>
      )}
    </Wrapper>
  );
};

MeatBallsMenu.Menu = Menu;

export default MeatBallsMenu;
