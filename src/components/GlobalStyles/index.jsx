import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
