exports.renderHome = async (req, res) => {
    const host = req.headers.host;
    const subdomain = host.split('.')[0]; // O subdomínio será o primeiro componente do host
    if (subdomain !== 'minhaempresa') { // Exclui o domínio principal
        req.cliente = subdomain; // Armazena o nome do cliente
    }
    console.log('HOST: ' + host);
    console.log('Subdomínio: ' + subdomain);
    res.render('home');
}