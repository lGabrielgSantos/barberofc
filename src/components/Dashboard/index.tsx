import { Summary } from "../Summary";
import { Container} from "./style";
import { TableValues } from "../TableValues";


export function Dashboard() {
    return(
      
        <Container>
            <div>
        <Summary />
        </div>
       <TableValues />
       
        </Container>

    )
}