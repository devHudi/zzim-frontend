import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";

const Icon = styled.span`
  cursor: pointer;
  font-size: 28px;
  color: ${(props) => (props.white ? "#ffffff" : "#212529")};
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.white ? "#f1f3f5" : "#343a40")};
  }
`;

const BackButton = ({ white }) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <Icon onClick={handleClick} white={white}>
      <RiArrowLeftSLine />
    </Icon>
  );
};

export default BackButton;
