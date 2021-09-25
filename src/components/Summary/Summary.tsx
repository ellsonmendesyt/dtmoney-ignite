import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import {Container,SummaryItem,Header,Title,Image, Total} from './Summary.styles'



const Summary:React.FC = () => {
    return (
        <Container>
         <SummaryItem>
             <Header>
                 <Title>Entradas</Title>
                 <Image src={incomeImg} alt='entradas' />
             </Header>
             <Total>R$ 1000,00</Total>
        </SummaryItem>

        <SummaryItem>
             <Header>
                 <Title>Saidas</Title>
                 <Image src={outcomeImg} alt='entradas' />
             </Header>
             <Total>R$ -500,00</Total>
        </SummaryItem>   

        <SummaryItem className='hilite-bg'>
             <Header>
                 <Title>Total</Title>
                 <Image src={totalImg} alt='entradas' />
             </Header>
             <Total>R$ 500,00</Total>
        </SummaryItem> 

        </Container>
    )
}

export default Summary
