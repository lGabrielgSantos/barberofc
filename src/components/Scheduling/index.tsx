import { Container } from "./style"
import trashImg from '../assets/trash.svg'
import editImg from '../assets/edit.svg'
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../services/firebase-config"
import { useState } from "react"
import { EditModal } from "../EditModal"

interface SchedulingProps {
    agendamento: {
        id: number,
        nome: string,
        horario: string,
        valor: number,
        data: string
    }
}



const deleteUser = async (id: any) => {
    const userDoc = doc(db, "agendamentos", id);
    await deleteDoc(userDoc)
    location.reload();
}
export function Scheduling(props: SchedulingProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
    setIsModalOpen(true);
    
  }
  function handleCloseModal() {
    setIsModalOpen(false);
    
  }
    return(

            <tr>
                <td>{props.agendamento.nome}</td>
                <td>{props.agendamento.horario}</td>
                <td>
                {new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency:'BRL'
                 }).format(props.agendamento.valor)}
                </td>
                <td>
                {props.agendamento.data}
                </td>
                <td><button onClick={handleOpenModal}><img src={editImg} /></button></td>
                {isModalOpen ?  <EditModal 
                isOpen={isModalOpen} 
                onRequestClose={handleCloseModal}
                id={`${props.agendamento.id}`}
                agendamento={props.agendamento}/> : null}
                <td><button onClick={() => {deleteUser(props.agendamento.id)}}><img src={trashImg} /></button></td>
            </tr>
       
    )
}