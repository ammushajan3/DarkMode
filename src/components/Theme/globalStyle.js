import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props =>
      props.theme === 'dark' ? "#272182" : "#FFFFFF"};
  }`