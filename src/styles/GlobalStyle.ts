import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Manrope", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: ${({theme}) => theme.colors.blue_400};
    }
`