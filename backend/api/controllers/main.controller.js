let providers = require('../models/providers.models');
const Provider = require('../db/db');
const { ObjectId } = require('mongodb');

// Util functions
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0)
}
// Handle error
function handleError(res, err) {
    res.status(200)
    res.send('Something went wrong\n' + err)
}

// uri: /api/providers
// POST
exports.create = (req, res) => {
    var provider = req.body
    try {
        Provider.create(provider)
            .then(result => {
                res.status(201)
                res.send(result)
            }).catch(err => handleError(res, err))
    } catch (err) {
        handleError(res, err)
    }
}

// GET All
exports.readAll = (req, res) => {
    try {
        Provider.find({})
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404)
                    res.send('List is empty')
                }
                res.status(200)
                res.send(result)
            }).catch(err => handleError(res, err))
    } catch (err) {
        handleError(res, err)
    }
}
// GET One
exports.readOne = (req, res) => {
    try {
        let id = new ObjectId(req.params.id)
        Provider.find({ '_id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404)
                    res.send('List is empty')
                }
                // let provider = providers.find(provider => provider.id == id)
                res.status(200)
                res.send(result)
            }).catch(err => handleError(res, err))
    } catch (err) {
        handleError(res, err)
    }
}
// PUT
exports.update = (req, res) => {
    try {
        let id = new ObjectId(req.params.id) 
        let provider = req.body
        Provider.findOneAndUpdate({'_id':id},provider,{new:true})
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400)
                    res.send('List is empty. Can not update.')
                }
                res.status(200)
                res.send(result)
            }).catch(err => handleError(res, err))
    } catch (err) {
        handleError(res, err)
    }    
}
// DELETE One
exports.deleteOne = (req, res) => {
    try {
        let id = new ObjectId(req.params.id)
        Provider.findOneAndDelete({'_id':id})
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400)
                    res.send('List is empty. Cannot delete')
                }
                res.status(200)
                res.send(result)
            }).catch(err => handleError(res, err))
    } catch (err) {
        handleError(res, err)
    }
}
// DELETE All
exports.deleteAll = (req, res) => {
    try {
        Provider.deleteMany({})
            .then(result => {
                if (result.deletedCount === 0) {
                    res.status(400)
                    res.send('List is empty. Cannot delete')
                }
                res.status(200)
                res.send('All providers Deleted\n' + result)
            }).catch(err => handleError(res, err))
    } catch (err) {
        handleError(res, err)
    }
}