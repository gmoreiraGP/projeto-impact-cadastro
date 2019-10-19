import React, { Component } from 'react'

export default class List extends Component {


    renderLinhas = () => {
        const cursos = this.props.batatas || []
        return cursos.map(data => (
            <tr key={data._id}>
                <th scope="row">{data.codigo}</th>
                <td>{data.descricao}</td>
                <td>{data.cargaHoraria}</td>
                <td>{data.preco}</td>
                <td>{data.categoria}</td>
            </tr>
        )
        )

    }

    render() {

        return (
            <div>
                <h3 className="text-center">Lista de Cursos</h3>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Carga Horária</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}
