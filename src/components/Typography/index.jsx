import styled from "styled-components";

const Typography = {};

const CommonTypography = styled.div`
  ${(props) => props.red && "color: #e03131;"}
  ${(props) => props.green && "color: #2f9e44;"}
  ${(props) => props.blue && "color: #1971c2;"}
  ${(props) => props.pointer && "cursor: pointer;"}
`;

Typography.FormTitle = styled(CommonTypography)`
  font-weight: bold;
`;

Typography.FormValue = styled(CommonTypography)``;

export default Typography;
