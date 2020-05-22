import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');
  *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: 0;
  }

  body {
    background-color: #FFF;
    font-family: 'Montserrat Alternates', sans-serif;
  }

  html, input, button, textarea {
        font-family: 'Montserrat Alternates', sans-serif;
    }
`;
