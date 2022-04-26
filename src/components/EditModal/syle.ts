import styled from "styled-components";
export const Container = styled.form `
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }


    button[type="submit"] { // setando para pegar somento o buttons tipo submit
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
`