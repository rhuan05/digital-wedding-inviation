const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usuario: String,
    senha: String,
    nomeEsposa: String,
    nomeMarido: String,
    dataEvento: Date,
    subdominio: String
});

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

module.exports = UsuarioModel;