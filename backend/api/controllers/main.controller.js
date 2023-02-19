let provider = require('../models/providers.models');

// uri: /api/providers
// POST
exports.create = (req, res) => {
    let min = 100000
    let max = 999999
    let id = Math.floor(Math.random() * (max-min) + min)
    // Create new provider object
    let provider = {
        id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        position: req.body.position,
        company: {
            company_name: req.body.company.company_name,
            address: req.body.company.address,
            address2: req.body.company.address2,
            city: req.body.company.city,
            state: req.body.company.state,
            postal_code: req.body.company.postal_code,
            phone: req.body.company.phone,
            email: req.body.company.email,
            description: req.body.company.description,
            tagline: req.body.company.tagline,
        }
    }

    providers.push(provider)
    res.status(200)
    res.send(provider)
}
// GET All
exports.readAll = (req, res) => {
    res.status(200)
    res.send(providers)
}
// GET One
exports.readOne = (req, res) => {
    let id = req.params.id
    let provider = providers.find(provider => provider.id == id)
    res.status(200)
    res.send(provider)
}
// PUT
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
    provider.company.postal_code = req.body.company.postal_code
    provider.company.phone = req.body.company.phone
    provider.company.email = req.body.company.email
    provider.company.description = req.body.company.description
    provider.company.tagline = req.body.company.tagline

    res.status(200)
    res.send(provider)
}
// DELETE One
exports.deleteOne = (req, res) => {
    let id = req.params.id
    let provider = providers.find(provider => provider.id == id)

    let idx = providers.indexOf(provider)
    // Remove
    providers.splice(idx,1)

    res.status(200)
    res.send(provider)
}
// DELETE All
exports.deleteAll = (req, res) => {
    providers = []
    res.status(200)
    res.send('All providers Deleted')
}