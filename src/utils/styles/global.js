import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap');

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%; /* 1rem = 10px */
    }

    body{
        font-family: 'Lato', sans-serif;
        line-height: 1.7;
        font-weight: 400;
        --primary: ${props => props.theme.colors.main};
        --text: ${props => props.theme.colors.darkTheme.text};
        --text-highlight: ${props =>
            props.theme.colors.darkTheme.textHighlight};
        --background: ${props => props.theme.colors.darkTheme.background};
        color: var(--text);
        background-color: var(--background);
        box-sizing: border-box;
    }
`

export default GlobalStyle
