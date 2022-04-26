import { useContext, useEffect, useState } from "react";
import { SchedulingContext } from "../SchedulingContext";
import { Container} from "./style";


export function Summary() {

    const agenda = useContext(SchedulingContext);
    const [clientes, setClientes] = useState(0);
    const [lucro, setLucro] = useState(0);
    
    const totalDeposits = agenda.reduce((acc, transaction) => {
            return acc + transaction.valor;
       return acc;
    }, 0);
    const totalClientes = agenda.reduce((acc, transaction) => {
        return acc + 1;
   return acc;
}, 0);


    return(
       
        <Container>
            <div>
                <header>
                    <p>Clientes</p>
                    </header>
                    
                    <strong>{totalClientes}</strong>
             </div>
             <div className="rigthc">
                <header>
                    <p>Lucro</p>
                    </header>
                    <strong>{new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency:'BRL'
                 }).format(totalDeposits)}</strong>
             </div>
        </Container>
   
    )
}