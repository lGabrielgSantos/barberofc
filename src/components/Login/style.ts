import styled from "styled-components";

export const Container = styled.div ` 
height: 100vh;
width: 100vw;
background: linear-gradient(177deg, rgba(45,18,119,1) 0%, rgba(84,41,204,1) 49%, rgba(105,51,255,1) 100%);

margin: 0;
top: 0;
`

export const Content = styled.div ` 
    top: 15%;
    margin-left: 32%;
    display: flex;
    position: relative;
    align-items: center;
    background: var(--backgorund);
    width: 30%;
    height: 70%;
    border-radius: 1rem;
    box-shadow: 10px 10px 10px 10px rgba(105, 51, 255, 0.33);

    @media (max-width: 1320px) {
        margin-left: 25%;
        width: 50%;
        } 
    @media (max-width: 800px) {
        margin-left: 0%;
        width: 100%;
        }    


    div {
        margin-left: 10%;
        align-items: center;
        width: 80%;

        button { // setando para pegar somento o buttons tipo submit
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--blue-light);
            color: #FFF;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;

            transition: filter 0.2s;
            &:hover{
                filter: brightness(0.9); //diminuir luminosidade do botao
            }
        }

        h2 {
            color: var(--text-title);
            margin-bottom: 1rem;
        }

        p {
            color: var(--text-body);
            margin-top: 1rem;
            cursor: pointer;
            transition: 0.2;
            :hover {
                color: var(--blue-light)
            }
        }

    }

    
    

`