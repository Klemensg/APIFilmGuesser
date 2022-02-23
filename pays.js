var mongoose = require('mongoose')
const paysSchema = new mongoose.Schema({
    id: Number,
    nom: String,
})

const Pays = mongoose.model('Pays', paysSchema)

module.exports = Pays