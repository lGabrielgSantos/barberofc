import styled from "styled-components";

export const Container = styled.div ` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    margin-top: 2rem;

    @media (max-width: 500px) {
            grid-template-columns: 1fr; 
            
        }   

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 100%;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; //pro top funciona no strong
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highligth-background{
            background: var(--green);
            color: #fff;
        }

        & + div { 
            margin-right: 3rem;
        }
    }

`