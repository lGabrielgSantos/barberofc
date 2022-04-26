import styled from "styled-components";

export const Container = styled.div ` 
width: 100%;
display: flex;
justify-content: space-between;
background: linear-gradient(90deg, rgba(45,18,119,1) 0%, rgba(84,41,204,1) 49%, rgba(105,51,255,1) 100%);
height: 5rem;
align-items: center;
@media (max-width: 500px) {
           width: 100%;
        }

div {
    margin-left: 5%;
    display: flex;
    p {
        color: #fff;
        margin-left: 1rem;
        margin-top: 5px;
    }
    button {
        border: 0;
        background: transparent;
        padding: 0;
        height: 0;
        margin-right: 1rem;
    }
}

h2{
   margin-right: 5%;
   cursor: pointer;

    :hover {
        color: var(--blue-light);
    }
}

img {
    width: 30px;
    height: 30px;
  
}

button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        margin-right: 5%;
        transition: 0.2s;

        &:hover {
            filter: brightness(0.9); //escurece a cor do conteudo
        }
    }
`