import React from 'react'
import { Container } from '../../../components/Container'
class Formulario extends React.Component {
    initialState = {nome: '', cidade: 'São Paulo'}
    constructor(props){
        super(props)
        this.state = this.initialState
    }
    

    alteraNome = function(e) {
       this.setState({nome : e.target.value})
    }

    alteraCidade = function(e) {
       this.setState({cidade : e.target.value})
    }

  

    render() {
        return (
            <form>
                <Container className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" value={this.state.nome} onChange={this.alteraNome.bind(this)} placeholder="TEXTE" />
                    <label>Cidade</label>
                    <input type="text" className="form-control" value={this.state.cidade} onChange={(e) => this.alteraCidade(e.target.value)} placeholder="TEXTE" />
                </Container>
                <button type="submit" className="btn btn-primary">MANDA-LÊ</button>
            </form>
        )
    }
}


export default Formulario


// <form>
//                 <div className="form-group">
//                     <label for="exampleInputEmail1">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                 </div>
//                 <div className="form-group">
//                     <label for="exampleInputPassword1">Password</label>
//                     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//                 </div>
//                 <div className="form-group form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>