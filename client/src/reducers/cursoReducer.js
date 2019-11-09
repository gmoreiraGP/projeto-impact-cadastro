const INITIAL_STATE = {
    codigo: '123',
    descricao: 'React',
    cargaHoraria: 20,
    preco: 150.5,
    categoria: 'INFORMÁTICA',
    textBotao: 'Adicionar',
    
    lista : [{
        _id: '-1',
        codigo: 123,
        descricao: 'Curso Teste',
        cargaHoraria: 4,
        preco: 50.0,
        categoria: 'INFORMÁTICA'
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){     
        case 'LIMPAR_FORM' : return INITIAL_STATE
        case 'ATUALIZA_CODIGO' : return {...state, codigo: action.value}
        case 'ATUALIZA_DESCRICAO' : return {...state, descricao: action.value}
        case 'ATUALIZA_CARGA_HORARIA' : return {...state, cargaHoraria: action.value}
        case 'ATUALIZA_PRECO' : return {...state, preco: action.value}
        case 'ATUALIZA_CATEGORIA' : return {...state, categoria: action.value}
        default : return state
    }
}  