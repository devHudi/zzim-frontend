import styled from "styled-components";

const Wrapper = styled.input`
  border: 3px solid red;
`;

const TextField = () => {
  return (
    <div>
      I'm TextField
      <br />
      <Wrapper />
    </div>
  );
};

export default TextField;
