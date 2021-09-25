import React from 'react'
import {Container,Table,THead,Th,Td,Tr,TBody} from './TransactionsTable.styles'


const TransactionsTable = () => {
    return (
        <Container>
            <Table>
            <THead>
                <Tr>
                    <Th>Titulo</Th>
                    <Th>Valor</Th>
                    <Th>Categoria</Th>
                    <Th>Data</Th>
                </Tr>
            </THead>
            <TBody>
                <Tr>
                    <Td>Desenvolvimento de Website</Td>
                    <Td className='deposit'>R$ 12.000,00</Td>
                    <Td>Desenvolvimento</Td>
                    <Td>20/20/2021</Td>
                </Tr>
                <Tr>
                    <Td >Faculdade</Td>
                    <Td className='withdraw'>- R$150,00</Td>
                    <Td>Doméstico</Td>
                    <Td>10/10/2021</Td>
                </Tr>
                

            </TBody>
            </Table>
        </Container>
    )
}

export default TransactionsTable
