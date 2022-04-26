import styled from "styled-components";


export const Container = styled.div ` 
    margin-top: 4rem;

    div {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 100%;

        @media (max-width: 500px) {
            grid-template-columns: repeat(3, 1fr);
            
        }   
    }
    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2rem;
        margin-bottom: 1rem;
        margin-right: 1%;
        transition: 0.2s;

        &:hover {
            filter: brightness(0.9); //escurece a cor do conteudo
        }
    }

    table{
       width: 100%;
        border-spacing: 0 0.5rem;
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        @media (max-width: 600px) {
            th {
                padding: 0 0 !important;
            }
            td {
                padding: 1rem 0.4rem !important;
            }
        }

        td {
         
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            
            img {
                width: 20px;
                height: 20px;
            }


            &:first-child{
                color: var(--text-title);
            }

           button {
                border: 0;
                background: transparent;
           }
        }

    }         
`