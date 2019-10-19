import React from 'react'

import { Container } from '../../components/Container'
import Cabecalho from '../../components/menu/header-component'

function Home() {
    return (
        <Container>
            <Cabecalho title="Seja bem vindo" description="Escolha uma opção acima" />
        </Container>
    )
}

export default Home
