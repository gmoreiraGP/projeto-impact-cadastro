import React, { Component } from 'react'

import { Container } from '../../components/Container'
import Cabecalho from '../../components/menu/header-component'

export default class Contato extends Component {
    render() {
        return (
            <Container>
                <Cabecalho title="Contato" description="Deixe seus dados que entraremos em contato com você" />
            </Container>
        )
    }
}
