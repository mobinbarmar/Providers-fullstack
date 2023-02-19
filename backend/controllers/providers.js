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
// Edit Form
exports.edit = (req, res) => {
    let id = req.params.id
    let provider = providers.find(provider => provider.id == id)
    res.render('providers/providers-edit', {
        id,
        title: 'Edit',
        provider
    })
}
// Update Form
exports.update = (req, res) => {
    let id = req.params.id
    let provider = providers.find(provider => provider.id == id)
    provider.firstname = req.body.firstname
    provider.lastname = req.body.lastname
    provider.position = req.body.position
    provider.company.company_name = req.body.company.company_name
    provider.company.address = req.body.company.address
    provider.company.address2 = req.body.company.address2
    provider.company.city = req.body.company.city
    provider.company.state = req.body.company.state
    provider.company.postal_code = req.body.company.
    provider.company.phone = req.body.company.phone
    provider.company.email = req.body.company.email
    provider.company.description = req.body.company.description
    provider.company.tagline = req.body.company.tagline


    res.render('providers/providers-update', {
        title: 'Update',
    })
}