import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: lightgray;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
