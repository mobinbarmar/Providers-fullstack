const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    if(req.url === '/get'){
        if(req.method === 'GET'){
            res.end('GET')
        }
    }else if(req.url === '/post'){
        if(req.method === 'POST'){
            res.end('POST')
        }
    }else if(req.url === '/put'){
        if(req.method === 'PUT'){
            res.end('PUT')
        }
    }else if(req.url === '/delete'){
        if(req.method === 'DELETE'){
            res.end('DELETE')
        }
    }else{
        res.end('Not Found!')
    }
    
    
})

server.listen(3000, () => {
    console.log('Server is ready!: http://localhost:3000');
})