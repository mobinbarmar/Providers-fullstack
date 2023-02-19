const providers = require('../models/providers');

exports.list = (req, res) => {
    res.render('providers/providers-list', {
        title: 'Service providers',
        providers
    })
}

exports.details = (req, res) => {
    let id = req.params.id
    let provider = providers.find(provider => provider.id == id)
    res.render('providers/providers-details', {
        id,
        title: 'Service providers Details',
        company: provider.company
    })
}