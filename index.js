const express = require('express')
var mongoose = require('mongoose')
const Film = require('./film.js')
const Pays = require('./pays.js')
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
const removeFilm = async id => {
    const film = await Film.deleteOne({id:id})
    return film
}


app.get('/film', async(req,res) => {
        const id = parseInt(req.query.id)
        if(!isNaN(id))
            res.status(200).json(await findFilm(id))
        else
            res.status(200).json("Invalid ID")
})


app.get('/films', async(req,res) => {
    const id = parseInt(req.query.id)
    res.status(200).json(await findAllFilms(id))
})


app.post('/films', async(req,res) => {
    console.log(req.body)
    res.status(200).json(await createFilm(req.body))
})

app.delete('/film', async(req,res) => {
    const id = parseInt(req.query.id)
    if(!isNaN(id))
            res.status(200).json(await removeFilm(id))
        else
            res.status(200).json("Invalid ID")
})









const findPays = async id => {
    const pays = await Pays.findOne({id}).select('-__v').select('-_id')
    return pays
}
const findAllPays = async id => {
    const pays = await Pays.find({}).select('-__v').select('-_id')
    return pays
}
const createPays = async filmData => {
    const pays = await Pays.create(filmData)
    return pays
}
const removePays = async id => {
    const pays = await Pays.deleteOne({id:id})
    return pays
}


app.get('/pay', async(req,res) => {
        const id = parseInt(req.query.id)
        if(!isNaN(id))
            res.status(200).json(await findPays(id))
        else
            res.status(200).json("Invalid ID")
})


app.get('/pays', async(req,res) => {
    const id = parseInt(req.query.id)
    res.status(200).json(await findAllPays(id))
})


app.post('/pays', async(req,res) => {
    console.log(req.body)
    res.status(200).json(await createPays(req.body))
})

app.delete('/pay', async(req,res) => {
    const id = parseInt(req.query.id)
    if(!isNaN(id))
            res.status(200).json(await removePays(id))
        else
            res.status(200).json("Invalid ID")
})














app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
  }) 