import { Container } from  '../Dashoboard/Dashboard.styles'
import Summary from '../Summary'
import TransactionsTable from '../TransactionsTable'


const Dashboard:React.FC = () => {
    return (
        <Container>
         <Summary/>
         <TransactionsTable />
        </Container>
    )
}

export default Dashboard
