const http = require('http');

const data = JSON.stringify({
    title: 'MEAN Stack'
})

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Content-lenght': data.length
    }
}

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
})

req.on('error', (err) => {
    console.log(err);
})

req.end()