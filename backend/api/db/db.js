const mongoose = require('mongoose');
const { Provider } = require('../models/provider');

// Connection URI to MongoDB
const uri = 'mongodb://localhost:27023/provider_db'

mongoose.set('strictQuery', false);


// Make db connection (asychronously)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true })
    .then((result) => {
        console.log('Successful Connection!')
    }).catch((err) => console.log(err))


module.exports = Provider