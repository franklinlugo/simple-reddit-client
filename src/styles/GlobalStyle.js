import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  html, body, #app{
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
