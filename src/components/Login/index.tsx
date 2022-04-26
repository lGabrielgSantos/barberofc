import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { GlobalStyles } from "../../styles/global";
import { auth } from "../services/firebase-config";
import { Container, Content } from "./style";
import { useNavigate } from 'react-router-dom'
export function Login() {

    const navigate = useNavigate()
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
                localStorage.setItem("user", `${auth.currentUser?.email}`);
             navigate("/")
        } catch (error) {
            alert('errp')
        }
    }

    return(
        <>
        
        <GlobalStyles />
        <Container>
        <Content>
            <div>
                <h2>Bem vindo!</h2>
                 <input  
                placeholder="Usuarío"
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}
                />
                <input
                type="password"
                placeholder="Senha"
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}
                />
                <p>Esqueci minha senha.</p>
                 <button onClick={login}type="submit">Login</button>
               </div>
        </Content>
        </Container>
        </>
    )
}
