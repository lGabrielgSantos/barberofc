import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase-config";
import Modal from "react-modal";
import { Container } from "./syle";
import closeImg from "../assets/close.svg"
import { FormEvent, useState } from "react";
import InputMask from "react-input-mask";

interface NewSchedulingModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewSchedulingModal({isOpen, onRequestClose}: NewSchedulingModal) {
    

    const [newName, setNewName] = useState("");
    const [newValue, setNewValue] = useState(0);
    const [newDate, setNewDate] = useState("");
    const [newTime, setNewTime] = useState("");

    const userCollectionRef = collection(db, "agendamentos")

    const createAgendamentos = async (event: FormEvent) => {
        event.preventDefault();
        if(newName && newValue && newDate && newTime) {
        await addDoc(userCollectionRef, {nome: newName, valor: newValue, horario: newTime, data: newDate});
        onRequestClose();
        location.reload();
        } else {
            alert("Preencha todos os campos!")
        }
    };
    
    return (
        <Modal 
        isOpen={isOpen} 
        ariaHideApp={false}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            <Container>
            <h2>Novo agendamento</h2>

                <input  
                placeholder="Cliente"
                onChange={(event) => {
                    setNewName(event.target.value);
                }}
                />
                <InputMask
                mask="99:99"  
                placeholder="Horário"
                onChange={(event) => {
                    setNewTime(event.target.value);
                }}
                />
                    <input  
                placeholder="Valor"
                onChange={(event) => {
                    setNewValue(Number(event.target.value));
                }}
                />
                <InputMask
                mask="99/99/9999"
                placeholder="Data"
                onChange={(event) => {
                    setNewDate(event.target.value);
                }}
                />
                <button type="submit" onClick={createAgendamentos}>Cadastrar</button>
            </Container>

        </Modal>

    );
}