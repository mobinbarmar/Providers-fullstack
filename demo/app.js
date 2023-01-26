const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    if(req.method === 'GET'){
        res.end('GET')
    }
    if(req.method === 'POST'){
        res.end('POST')
    }
    if(req.method === 'PUT'){
        res.end('PUT')
    }
    if(req.method === 'DELETE'){
        res.end('DELETE')
    }
})

server.listen(3000, () => {
    console.log('Server is ready!: http://localhost:3000');
})