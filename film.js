
var mongoose = require('mongoose')
const filmSchema = new mongoose.Schema({
    id: Number,
    nom: String,
    country_id: Number,
    iddb: Number
})

const Film = mongoose.model('Film', filmSchema)

module.exports = Film