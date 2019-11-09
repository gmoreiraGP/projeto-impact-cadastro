import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {

    
    renderLinhas = () => {
        const cursos = this.props.list || []
        return cursos.map(data => (
            <tr key={data._id}>
                <th scope="row">{data.codigo}</th>
                <td>{data.descricao}</td>
                <td>{data.cargaHoraria}</td>
                <td>{data.preco}</td>
                <td>{data.categoria}</td>
                <td>
                    <button 
                        className="btn btn-warning mr-3" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Editar"
                        onClick={() => this.props.editarCurso(data)}>
                            <i className="fa fa-edit"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Excluir"
                        onClick={() => this.props.removerCurso(data)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                </td>
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
                            <th scope="col">Ações</th>
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

const mapStateToProps = state => ({
   list: state.curso.lista
})

export default connect(mapStateToProps, null)(List)