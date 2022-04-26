import styled from "styled-components";

export const Headerc = styled.header ` 
   width: 100%;
   background: var(--shape);
   text-align: center;
   left: 0;
   top: 0;
   height: 5rem;
    border-bottom: 0.5px solid var(--backgorund);
    display: flex;
    justify-content: space-around;

    h1 {
        margin-top: 1rem;
    }

    img {
        margin-top: 1rem;
        width: 3rem;
        height: 3rem;
    }

    button {
        background: transparent;
        margin: 0;
        border: 0;

        img {
            width: 15px;
            height: 15px;
        }

        @media (min-width: 1001px) {
            opacity: 0;
        }
    }
`

export const Menu = styled.div ` 
    background: var(--shape);
    height: 100vh;
    width: 15%;
    box-shadow: 0px 1px 25px 0px rgb(0 0 0 / 43%);
    position: fixed;

        @media (max-width: 1220px) {
        width: 18%;
        }
       
        @media (max-width: 500px) {
        max-width: 100%;
        width: 100%;
        height: 100%;
        
        } 
        
        
       
    `

export const Content = styled.div ` 
    height: 70%;
    text-align: center;
    

    .menuItem {
        cursor: pointer;
        display: flex;
        align-items: center;
        color: var(--text-title);
        border-left: 2px;
        background: var(--shape);
        margin-bottom: 1rem;
        height: 5rem;
        align-items: center;
        gap: 1rem;
        border-bottom: 0.5px solid var(--backgorund);
        transition: 0.3s;
        img {
            margin-left: 2rem;
            width: 20px;
            height: 20px;
        }

        :hover {
            color: var(--blue);
            border-left: 5px solid var(--blue);
            box-shadow: 0px 1px 15px 0px rgba(105, 51, 255, 0.33);
        }
        span { 
            display: block;
            font-size: 1rem;
            line-height: 3rem;
        }

        
    }
   
`

export const Footer = styled.footer ` 
    display: flex;
    justify-content: space-around;
    height: 10rem;
    background: white;
    border-top: 0.5px solid var(--backgorund);
    img {
        margin-top: 2rem;
        width: 1rem;
        height: 1rem;
        color: white;
        cursor: pointer;
    }
    button {
        border: 0;
        background: transparent;
        
    }
`
