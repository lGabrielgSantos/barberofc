
import {collection, getDocs} from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { db } from "./services/firebase-config";


interface Scheduling {
    id: number,
    nome: string,
    horario: string,
    valor: number,
    data: string
}

interface SchedulingContextProps {
    children: ReactNode;
}

export const SchedulingContext = createContext<Scheduling[]>([]);

export function SchedulingProvider({children}: SchedulingContextProps) {
    
    const [agenda, setAgenda] = useState<any>([])
    const userCollectionRef = collection(db, "agendamentos")


    useEffect(() => {
        const getAgendamentos = async () => {
            const data = await getDocs(userCollectionRef);
            setAgenda(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        
        getAgendamentos();
    }, []);
    return (
      <SchedulingContext.Provider value={agenda}>
        {children}
      </SchedulingContext.Provider>
    )
  }