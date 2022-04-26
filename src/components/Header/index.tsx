import { Menu, Content, Footer, Headerc } from "./style";
import moustacheImg from '../assets/moustache.svg'
import scheduleImg from '../assets/schedule.svg'
import configImg from '../assets/config.svg'
import managementImg from '../assets/management.svg'
import reportImg from '../assets/report.svg'
import exitImg from '../assets/exit.svg'
import questionImg from '../assets/question.svg'
import webImg from '../assets/web.svg'
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase-config";
import { useNavigate } from "react-router-dom";
import closeImg from '../assets/close.svg';

interface HeaderProps {
    menuStatus: boolean;
    handleCloseMenu: () => void;
}
export function Header({menuStatus, handleCloseMenu}: HeaderProps) {

    
    var largura = window.screen.width;
    const navigate = useNavigate()
    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem("user");
        navigate("/login")
    };
    if (menuStatus === true || window.screen.width > 1120) {
    return(
        <Menu>
            <Headerc>
               <img src={moustacheImg}></img>
                <button onClick={handleCloseMenu}><img src={closeImg} /></button>
            </Headerc>
            <Content>
                <div className="menuItem">
                <img src={scheduleImg}></img>
                <span>Agenda</span>
                </div>
                <div className="menuItem">
                <img src={reportImg}></img>
                <span>Relatorios</span>
                </div>
                <div className="menuItem">
                <img src={configImg}></img>
                <span>Configurações</span>
                </div>
                <div className="menuItem">
                <img src={managementImg}></img>
                <span>Gestão</span>
                </div>
            </Content>
            <Footer>
                <img src={webImg}></img>
                <img src={questionImg}></img>
                <div>
                <button onClick={logout}><img src={exitImg}></img></button>
                </div>

            </Footer>
        </Menu>
    )
} else {
    return <></>
}
}