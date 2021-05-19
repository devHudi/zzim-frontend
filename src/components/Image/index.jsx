import styled from "styled-components";

const Image = styled.div`
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "300px"};
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;

export default Image;
