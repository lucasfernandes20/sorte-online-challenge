import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  p {
    color: #505050;
    font-weight: 800;
    font-size: 15px;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    overflow-x: hidden;
  }
`
