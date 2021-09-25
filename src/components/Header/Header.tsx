import React from 'react'
import { Container,Button,Image, Wrapper } from './Header.styles'
import logoImg from '../../assets/logo.svg';


const Header = () => {
    return (
        <Container>
            <Wrapper>
            <Image src={logoImg} alt='logo' />
            <Button>Nova Transação</Button>
            </Wrapper>
        </Container>
    )
}

export default Header