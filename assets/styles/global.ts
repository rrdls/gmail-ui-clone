import { createGlobalStyle } from "styled-components";
import fonts from "../fonts";

export const GlobalStyles = createGlobalStyle`
    ${fonts}
    *{
        box-sizing:border-box;
        margin: 0;
        padding:0;
        outline: 0;
    }

    body, html {
        font-family: Roboto, sans-serif;
        font-size: 14px;
        background-color: var(--primary);
    }
    ol, ul {
        list-style: none;
    }
    :root{
        --primary: #202124;
        --secondary: #595959;
        --white: white;
        --border: rgba(255, 255, 255, 0.3);
        --icons: rgb(205,205,205);
        --gmail-red: rgb(179,69,59);
     }
`;
