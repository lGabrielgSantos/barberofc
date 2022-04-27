import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle ` 

:root {
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --backgorund: #F8F2F5;
        --shape: #ffffff;
}
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        
    }

    body {
        background: var(--backgorund);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family:  'Poppins', sans-serif;
        font-weight: 400;
        
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;  
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay { //fundo do modal
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: 2s;
    }

    .react-modal-content {
        width: 100%;
        max-width: 516px;
        background: var(--backgorund);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
        animation: open 0.5s ease-in forwards;


    }

    @keyframes open {
        from {
            opacity: 0;
            bottom: -30px;

        }
        to {
            opacity: 1;
            bottom: 0px;
        }
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }

    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;  
     

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }

    }

`

export const ContentR = styled.section ` 
    max-width: 85%;
    margin-left: auto;

    @media (max-width: 1000px) {
            font-size: 87.5%;
            max-width: 100%;
        }
`

