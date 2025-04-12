import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f5f5f5;
    padding-top: 120px; /* Ajustado para o header responsivo */

    @media (min-width: 768px) {
      padding-top: 80px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    padding: 3rem 1rem;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      padding: 4rem 2rem;
    }
  }
`;

export default GlobalStyle;
