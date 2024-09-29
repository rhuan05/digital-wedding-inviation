const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const adminController = require('../controllers/adminController');
const cadastroController = require('../controllers/cadastroController');
const loginController = require('../controllers/loginController');
const dadosIniciaisController = require('../controllers/dadosIniciaisController');

// Middleware
function verificaAutenticacao (req, res, next){
    if(req.session.user){
        next();
        return;
    }
    
    res.redirect('/login');
};

router.get('/', homeController.renderHome);

router.get('/admin', verificaAutenticacao, adminController.renderAdmin);

router.get('/cadastro', cadastroController.renderCadastro);
router.post('/cadastro', cadastroController.cadastrarUsuario);

router.get('/login', loginController.renderLogin);
router.post('/login', loginController.logarUsuario);

router.get('/dados-iniciais', verificaAutenticacao, dadosIniciaisController.renderDadosIniciais);
router.post('/dados-iniciais', verificaAutenticacao, dadosIniciaisController.cadastrarDadosIniciais);

module.exports = router;