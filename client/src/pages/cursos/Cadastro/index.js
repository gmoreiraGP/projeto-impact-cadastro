import React, { Component } from 'react'
import axios from 'axios'

import Form from '../Form'
import List from '../List'

const URL = "http://localhost:3200/api/curso"

export default class Cadastro extends Component {
    initialState = {
        _id: '',
        data: [],
        codigo: 0,
        descricao: '',
        cargaHoraria: 0,
        preco: 0.0,
        categoria: 'REDES'
    }

    textoBotao = "Adicionar";

    constructor(props) {
        super(props)
        this.state = this.initialState
    }

    componentWillMount() {
        this.listar()
    }

    alteraCampos = function (target) {
        switch (target.id) {
            case 'codigo':
                this.setState({ codigo: target.value })
                break
            case 'descricao':
                this.setState({ descricao: target.value })
                break
            case 'cargaHoraria':
                this.setState({ cargaHoraria: target.value })
                break
            case 'preco':
                this.setState({ preco: target.value })
                break
            case 'categoria':
                this.setState({ categoria: target.value })
                break
            default:
                break
        }
    }

    listar() {
        axios.get(URL)
            .then(res => this.listarCallback(res.data))
            .catch(err => {
                console.log(err)
            })
    }

    listarCallback(data) {        
        this.setState({ ...this.state, data })
    }

    adicionarCurso(e) {
        e.preventDefault();
        const { _id, codigo, descricao, cargaHoraria, preco, categoria } = this.state
        const body = { codigo, descricao, cargaHoraria, preco, categoria }
        
        if (_id && _id.trim() !== '') {
            axios.put(`${URL}/${_id}`, body)
                .then(_ => {
                    this._callbackSucess('Curso atualizado')
                }).catch(this._calbackError);
        } else {
            axios.post(URL, body)
                .then(_ => {
                    this._callbackSucess('Curso adicionado')
                }).catch(this._calbackError);
        }
    }

    editarCurso = function (data) {       
        this.setState({
            ...this.state,
            _id: data._id,
            codigo: data.codigo,
            descricao: data.descricao,
            cargaHoraria: data.cargaHoraria,
            preco: data.preco,
            categoria: data.categoria,
        })
    }

    removerCurso = function (data) {
        if (window.confirm("Você dejesa excluir curso selecionado?")) {
            axios.delete(`${URL}/${data._id}`)
                .then(response => {
                    alert(`Curso ${data.descricao} foi removido com sucesso.`)
                    this.listar()
                })
                .catch(err => console.log(err))
        }
    }

    limpar = function(e){
        e.preventDefault()
        this.setState({...this.initialState, data: this.state.data})
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <Form
                        alteraCampos={this.alteraCampos.bind(this)}
                        codigo={this.state.codigo}
                        descricao={this.state.descricao}
                        cargaHoraria={this.state.cargaHoraria}
                        preco={this.state.preco}
                        categoria={this.state.categoria}
                        adicionarCurso={this.adicionarCurso.bind(this)}
                        textoBotao = {this.state._id && this.state.id !== '' ? 'Atualizar' : 'Adicionar'}
                        limpar={this.limpar.bind(this)}
                    />
                </div>
                <div className="col-8">
                    <List
                        batatas={this.state.data}
                        removerCurso={this.removerCurso.bind(this)}
                        editarCurso={this.editarCurso.bind(this)}
                    />
                </div>
            </div>
        )
    }

    _calbackError = function (error) {
        const cargaHoraria = error.response.data.errors.cargaHoraria
        const codigo = error.response.data.errors.codigo
        const preco = error.response.data.errors.preco
        const descricao = error.response.data.errors.descricao
        const categoria = error.response.data.errors.categoria

        var texto = ''

        if (cargaHoraria) {
            texto += 'Carga horária Inválida\n'
        }

        if (codigo) {
            texto += 'Código Inválido\n'
        }

        if (preco) {
            texto += 'Preço Inválido\n'
        }
        if (descricao) {
            texto += 'Descrição Inválida\n'
        }
        if (categoria) {
            texto += 'Categoria Inválida\n'
        }
        alert(texto)
    }

    _callbackSucess = function (msg) {
        alert(msg);
        this.listar();
        this.setState(this.initialState)
    }
}
