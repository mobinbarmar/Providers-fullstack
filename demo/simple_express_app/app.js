const express = require('express');
const fs = require('fs');
const dir = './public'
const port = process.env.PORT | 3000

const app = express();

app.get('/', (req, res) => {
    res.render('./public/index.html')
})

app.listen(port, () => {
    console.log(`Server is running in: http://localhost:${port}`);
})