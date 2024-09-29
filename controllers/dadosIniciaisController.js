const UsuarioModel = require('../models/UsuarioModel');

exports.renderDadosIniciais = async (req, res) => {
    res.render('home', { mensagem: [] });
};

exports.cadastrarDadosIniciais = async (req, res) => {
    const { nomeEsposa, nomeMarido, dataEvento } = req.body;
    let camposInvalidos = [];

    if(!nomeEsposa || nomeEsposa == '')
        camposInvalidos.push('Nome da esposa');

    if(!nomeMarido || nomeMarido == '')
        camposInvalidos.push('Nome do marido');

    if(!dataEvento || dataEvento == '')
        camposInvalidos.push('Data do evento');

    if(camposInvalidos.length > 0)
        return res.status(400).render('dados-iniciais', { mensagem: 'Campos inválidos: ' + camposInvalidos.join(', ') });

    const usuarioDB = await UsuarioModel.findOne({ usuario: req.session.user.usuario, senha: req.session.user.senha });

    //Validar esse erro
    if(!usuarioDB)
        return res.status(400).render('dados-iniciais', { mensagem: ['Usuário não encontrado.'] });

    usuarioDB.nomeEsposa = nomeEsposa;
    usuarioDB.nomeMarido = nomeMarido;
    usuarioDB.dataEvento = dataEvento;
    usuarioDB.cadastroInicial = true;

    try{
        await usuarioDB.save();
        return res.status(200).render('admin', { mensagem: [], usuario: usuarioDB });
    }catch(error){
        console.log(error);
        return res.status(500).send('Erro ao cadastrar');
    }
};