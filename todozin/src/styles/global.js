import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  :root{
        --rosa: #A6035B;
        --preto: #000000;
        --branco: #F2F2F2;
        --bege: #EFE19B;
        --roxo: #3C0116;
        --rosa-claro: #A6033E;
        --amarelo: #D9CE96;
  }

  h1,
  h2,
  h3{
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase; 
  }

  p,
  a,
  button,
  li,
  input {
    text-transform: uppercase; 
    
    font-size: 1rem;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;

    color:var(--branco);
    
  }
`
export default GlobalStyle