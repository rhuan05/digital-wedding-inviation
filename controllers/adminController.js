const UsuarioModel = require("../models/UsuarioModel");

exports.renderAdmin = async (req, res) => {
    res.render('admin', { mensagem: [], usuario: req.session.user });
};

exports.cadastroInicial = async (req, res) => {

    let camposInvalidos = [];
    const { dataEvento, nomeMarido, nomeEsposa } = req.body;

    if(!dataEvento || dataEvento == '')
        camposInvalidos.push('Data do evento');

    if(!nomeMarido || nomeMarido == '')
        camposInvalidos.push('Nome do marido');

    if(!nomeEsposa || nomeEsposa == '')
        camposInvalidos.push('Nome da esposa');

    if(camposInvalidos.length > 0)
        return res.status(400).render('admin', { mensagem: 'Campos inválidos: ' + camposInvalidos.join(', ') });

    const usuarioModelDB = new UsuarioModel({
        nomeEsposa: nomeEsposa,
        nomeMarido: nomeMarido,
        dataEvento: dataEvento,
    });

    try{
        await usuarioModelDB.save();
        res.redirect('/');
    }catch(err){
        console.log(error);
        return res.status(500).send('Erro ao ');
    }

    res.send('Cadastro inicial');
}