const UsuarioModel = require('../models/UsuarioModel');

exports.renderCadastro = (req, res)=>{
    res.render('cadastro', { mensagem: [] });
};

exports.cadastrarUsuario = async (req, res)=>{
    const { usuario, senha, nomeEsposa, nomeMarido, dataEvento } = req.body;

    if(!usuario || !senha || !nomeEsposa || !nomeMarido || !dataEvento)    
        return res.status(400).render('cadastro', { mensagem: ['Preencha todos os campos para finalizar o cadastro!'] });

    const cadastroModelDB = await UsuarioModel.findOne({ usuario, senha });

    if(cadastroModelDB)
        return res.status(400).render('cadastro', { mensagem: ['Usuário já cadastrado!'] });

    const usuarioDB = new UsuarioModel({
        usuario,
        senha,
        nomeEsposa,
        nomeMarido,
        subdominio: `${nomeEsposa}-${nomeMarido}`,
        dataEvento
    });

    try{
        await usuarioDB.save();
        return res.status(200).render('login', { mensagem: ['Usuário cadastrado com sucesso!'] });
    }catch(error){
        console.log(error);
        return res.status(500).send('Erro ao cadastrar');
    }
};