import React, { Component } from 'react'
import axios from 'axios'

import Form from '../Form'
import List from '../List'

const URL = "http://localhost:3200/api/curso"

export default class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    listar(){
        axios.get(URL)
        .then(res => this.listarCallback(res.data))
        .catch(err => {
            console.log(err)
        })
    }
    listarCallback(data){
        this.setState({...this.state, data})
    }

    componentWillMount(){
        this.listar()
    }

    render() {
        return (
        <div className="row">
            <div className="col-4">
                <Form />
            </div>
            <div className="col-8">
                <List
                    batatas={this.state.data}
                />
            </div>
        </div>
                
            
        )
    }
}
