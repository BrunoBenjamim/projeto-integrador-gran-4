const http = require('http'); // importação do módulo http que já vem com o node

const server = http.createServer((req, res) => { // criação do servidor (requisição e resposta)
    res.writeHead(200, {'Content-Type': 'text/plain'}); // A requisição deu certo e o conteúdo que vou enviar é texto simples
    res.end('Olá, Mundo!'); // conteúdo da resposta do servidor para o navegador
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`); // O navegador faz a requisição e o servidor responde
});