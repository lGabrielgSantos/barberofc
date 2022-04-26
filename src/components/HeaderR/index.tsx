import { Container} from "./style";
import userImg from '../assets/user.svg'
import menuImg from '../assets/menu.svg'
import { auth } from "../services/firebase-config";

interface HeaderRProps {
    handleOpenModal: () => void;
    handleOpenMenu: () => void;
}

export function HeaderR({handleOpenModal, handleOpenMenu}: HeaderRProps) {
    var largura = window.screen.width;
    return(
        <Container>
        <div>
        {largura < 1120 ? <button onClick={handleOpenMenu}><img src={menuImg} /></button> : null}
        <img src={userImg} alt="usuario"/>
        {largura > 1120 ? <p>{localStorage.getItem("user")}</p>  : null}
        </div>
        <button type="button" onClick={handleOpenModal}>
            Adicionar horario 
        </button>

        </Container>
    )
}