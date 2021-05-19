import styled from "styled-components";

const Typography = {};

const CommonTypography = styled.div`
  ${(props) => props.red && "color: #e03131;"}
  ${(props) => props.green && "color: #2f9e44;"}
  ${(props) => props.blue && "color: #1971c2;"}
  ${(props) => props.pointer && "cursor: pointer;"}
  
  overflow:hidden;
  text-overflow: ellipsis;
`;

Typography.Title = styled(CommonTypography)`
  font-size: 20pt;
  font-weight: bold;
`;

Typography.Subtitle = styled(CommonTypography)`
  font-size: 15pt;
`;

Typography.FormTitle = styled(CommonTypography)`
  margin-bottom: 7px;
  font-size: 13pt;
  font-weight: bold;
`;

Typography.FormValue = styled(CommonTypography)`
  font-size: 13pt;
  margin-bottom: 15px;
`;

export default Typography;
