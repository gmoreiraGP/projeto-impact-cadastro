const restful = require('node-restful');
const mongoose = restful.mongoose; //referência ao mongoose do restful
//definindo o schema curso
const cursoSchema = new mongoose.Schema({
    codigo: { type: Number, required: true },
    descricao: { type: String, required: true },
    cargaHoraria: { type: Number, required: true, min: 4 },
    preco: { type: Number, min: 0 },
    categoria: {type: String, uppercase: true,
    enum:['INFORMÁTICA', 'ENGENHARIA', 'ADMINISTRAÇÃO', 'REDES']}
});
module.exports = restful.model('curso', cursoSchema);