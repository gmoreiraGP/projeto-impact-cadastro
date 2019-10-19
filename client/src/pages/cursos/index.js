import React, { Component } from 'react'

import { Container } from '../../components/Container'
import Cabecalho from '../../components/menu/header-component'

export default class Cursos extends Component {
    render() {
        return (
            <Container>
                <Cabecalho title="Cursos" description="Gerenciamento de cursos" />
            </Container>
        )
    }
}
