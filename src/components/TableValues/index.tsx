import { useContext, useEffect, useState } from "react";
import { Scheduling } from "../Scheduling";
import { SchedulingContext, SchedulingProvider } from "../SchedulingContext";
import { Container } from "./style";


interface Agendamento {
    id: number,
    nome: string,
    horario: string,
    valor: number,
    data: string
}



export function TableValues() {

    const [filterState, setFilterState] = useState(false);
    const [filterStateMenu, setFilterStateMenu] = useState(false);
    const [filterN1, setFilterN1] = useState('');
    const [filterN2, setFilterN2] = useState('');
    const agenda = useContext(SchedulingContext);

    function handleclickFilter(n1: string, n2: string) {
        setFilterState(true);
        setFilterN1(n1)
        setFilterN2(n2)
        localStorage.setItem("filter", 'true')
    }
    return (
        <Container>
            <button onClick={() => setFilterStateMenu(!filterStateMenu)}>{filterStateMenu ? 'Close' : 'Filter'}</button>
            <button onClick={() => setFilterState(false)}>Clear</button>
            {filterStateMenu ?  
            <div className="buttons">
            <button onClick={() => handleclickFilter('0', '1')}>Janeiro</button>
            <button onClick={() => handleclickFilter('0', '2')}>Fevereiro</button>
            <button onClick={() => handleclickFilter('0', '3')}>Março</button>
            <button onClick={() => handleclickFilter('0', '4')}>Abril</button>
            <button onClick={() => handleclickFilter('0', '5')}>Maio</button>
            <button onClick={() => handleclickFilter('0', '6')}>Junho</button>
            <button onClick={() => handleclickFilter('0', '7')}>Julho</button>
            <button onClick={() => handleclickFilter('0', '8')}>Agosto</button>
            <button onClick={() => handleclickFilter('0', '9')}>Setembro</button>
            <button onClick={() => handleclickFilter('1', '0')}>Outrubro</button>
            <button onClick={() => handleclickFilter('1', '1')}>Novembro</button>
            <button onClick={() => handleclickFilter('1', '2')}>Dezembro</button>
            </div> : null}
            <div className="scroll">
            <table>
                <thead>
                    <tr>
                    <th>Cliente</th>
                    <th>Horário</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {filterState ? agenda.map((item, index) => (
                        item.data.charAt(3) === filterN1 && item.data.charAt(4) === filterN2 && filterState ? 
                        <Scheduling key={item.id}agendamento={item}/>
                        :
                        null
                    )) :  agenda.map((item, index) => (
                        <Scheduling key={item.id}agendamento={item}/>
                    ))
                     }
                </tbody>
            </table>
            </div>
        </Container>
    )
}