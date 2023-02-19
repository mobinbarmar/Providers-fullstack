let providers = require('../models/providers.models');

// Util functions

function isEmptyList(obj){
    return (!obj || obj.lenght == 0 || Object.keys(obj).length == 0)
}
function existsProvider(id){
    return providers.find(provider => provider.id == id)
}
function getUniqueId(providers){
    let min = 100000
    let max = 999999
    do{
        var id = Math.floor(Math.random() * (max-min) + min)
    }while(existsProvider(id))
    return id
}

// uri: /api/providers
// POST
exports.create = (req, res) => {
    if(isEmptyList(providers)){
        providers = []
    }
    var id = req.body.id
    if(existsProvider(id)){
        res.status(400)
        res.send('Duplicate id not allowed')
        id = getUniqueId()
    }
    var provider = req.body
    provider.id = id
    providers.push(provider)
    res.status(200)
    res.send(provider)
}
// GET All
exports.readAll = (req, res) => {
    if(isEmptyList(providers)){
        res.status(404)
        res.send('List is empty')
    }
    res.status(200)
    res.send(providers)
}
// GET One
exports.readOne = (req, res) => {
    if(isEmptyList(providers)){
        res.status(404)
        res.send('List is empty')
    }
    let id = req.params.id
    let provider = providers.find(provider => provider.id == id)
    res.status(200)
    res.send(provider)
}
// PUT
exports.update = (req, res) => {
    if(isEmptyList(providers)){
        res.status(404)
        res.send('List is empty. Can not update.')
    }
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
    if(isEmptyList(providers)){
        res.status(404)
        res.send('List is empty. Cannot delete')
    }
    let id = req.params.id
    let provider = providers.find(provider => provider.id == id)

    let idx = providers.indexOf(provider)
    // Remove
    providers.splice(idx,1)

    res.status(200)
    res.send(providers)
}
// DELETE All
exports.deleteAll = (req, res) => {
    if(isEmptyList(providers)){
        res.status(404)
        res.send('List is empty. Cannot delete')
    }
    providers = []
    res.status(200)
    res.send('All providers Deleted')
}