const UsuarioModel = require('../models/UsuarioModel');

exports.renderLogin = (req, res)=>{
    res.render('login', { mensagem: [] });
};

exports.logarUsuario = async (req, res)=>{
    const { usuario, senha } = req.body;

    if(!usuario || !senha)
        return res.status(400).render('cadastro', { mensagem: ['Preencha todos os campos para finalizar o cadastro!'] });

    const usuarioModelDB = await UsuarioModel.findOne({ usuario, senha });
    console.log('(LOGIN) Usuário encontrado: ' + usuarioModelDB);

    if(!usuarioModelDB)
        return res.status(400).render('login', { mensagem: ['Usuário não encontrado.'] });

    try{
        req.session.user = usuarioModelDB;

        if(usuarioModelDB.cadastroInicial)
            return res.status(200).render('admin', { mensagem: [], usuario: req.session.user });
        else
            return res.status(200).render('dados-iniciais', { mensagem: [] }); 
    }catch(error){
        console.log(error);
        return res.status(500).send('Erro ao realizar o login');
    }
};