const express = require('express')
var mongoose = require('mongoose')
const Film = require('./film.js')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const MongoClient = require('mongodb').MongoClient


app.use(express.json())

mongoose.connect(process.env.BDD_CONNECT)
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});

const findFilm = async id => {
    const film = await Film.findOne({id}).select('-__v').select('-_id')
    return film
}
const findAllFilms = async id => {
    const film = await Film.find({}).select('-__v').select('-_id')
    return film
}
const createFilm = async filmData => {
    const film = await Film.create(filmData)
    return film
}
//createFilm({id:4,nom:"jure",country_id:55,iddb:82})

app.get('/film/:id', async(req,res) => {
        const id = parseInt(req.params.id)
        res.status(200).json(await findFilm(id))
})

app.get('/films', async(req,res) => {
    const id = parseInt(req.params.id)
    res.status(200).json(await findAllFilms(id))
})


app.listen(8080, () => {
    console.log('Ser v eur à l\'écoute')
  })