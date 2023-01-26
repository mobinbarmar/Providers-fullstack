const providers = require('../models/providers');

exports.list = (req, res) => {
    res.render('providers/provider-list', { providers })
}