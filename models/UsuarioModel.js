const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usuario: String,
    senha: String,
    cadastroInicial: Boolean,
    nomeEsposa: String,
    nomeMarido: String,
    dataEvento: Date,
});

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

module.exports = UsuarioModel;