import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #f8f9fa;
  }

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`;

export default GlobalStyle;
