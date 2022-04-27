import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase-config";
import Modal from "react-modal";
import { Container } from "./syle";
import closeImg from "../assets/close.svg"
import { FormEvent, useContext, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { SchedulingContext } from "../SchedulingContext";

interface EditModal {
    isOpen: boolean;
    onRequestClose: () => void;
    id: string,
    agendamento: {
        nome: string,
        horario: string,
        valor: number,
        data: string
    }
}

export function EditModal({isOpen, onRequestClose, id, agendamento}: EditModal) {
    

    const [newName, setNewName] = useState('');
    const [newValue, setNewValue] = useState(0);
    const [newDate, setNewDate] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newId, setId] = useState("");

    const agenda = useContext(SchedulingContext);

  useEffect(() => {
    setNewName(agendamento.nome);
    setNewValue(agendamento.valor);
    setNewDate(agendamento.data);
    setNewTime(agendamento.horario);
    agenda.map(agendamentos => {
        if(`${agendamentos.id}` === id) {
            setId(id)
        }
    })
  },[])

    const updateAgendamneto = async (event: FormEvent) => {

            event.preventDefault();
            const agendamentoDoc = doc(db, "agendamentos", newId);
            await updateDoc(agendamentoDoc, {nome: newName, valor: newValue, horario: newTime, data: newDate})
             onRequestClose();
            location.reload();
           
        
    }
    
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
            <h2>Editar agendamento de: {agendamento.nome}</h2>

                <input
                defaultValue={agendamento.nome}  
                onBlur={(event) => {
                setNewName(event.target.value)}}
                required
                />
                <InputMask
                required
                defaultValue={agendamento.horario}  
                mask="99:99"  
                placeholder="Horário"
                onBlur={(event) => {
                    setNewTime(event.target.value);
                }}
                />
                <input
                required  
                defaultValue={agendamento.valor}  
                placeholder="Valor"
                onBlur={(event) => {
                setNewValue(Number(event.target.value));
                }}
                />
                <InputMask
                required
                defaultValue={agendamento.data}  
                mask="99/99/9999"
                placeholder="Data"
                onBlur={(event) => {
                setNewDate(event.target.value);
                }}
                />
                <button onClick={updateAgendamneto} type="submit" >Update</button>
            </Container>

        </Modal>

    );
}