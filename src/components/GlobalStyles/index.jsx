import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
  }

  * {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
