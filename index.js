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
/*
createFilm({id:0,nom:"Les gendarmes à saint Tropez",country_id:0,iddb:0})
createFilm({id:1,nom:"Iron man",country_id:0,iddb:0})
createFilm({id:2,nom:"Goodbye Lenin",country_id:0,iddb:0})
createFilm({id:3,nom:"Le bon, la brute et le truand",country_id:0,iddb:0})
createFilm({id:4,nom:"Le labyrinthe de pan",country_id:0,iddb:0})
createFilm({id:5,nom:"How I unleashed world war II",country_id:0,iddb:0})
createFilm({id:6,nom:"Le cuirassé potemkine",country_id:0,iddb:0})
createFilm({id:7,nom:"Sacrée Graal",country_id:0,iddb:0})
createFilm({id:8,nom:"L'attaque de la moussaka géante",country_id:0,iddb:0})
createFilm({id:9,nom:"Mon voisin Totoro",country_id:0,iddb:0})
createFilm({id:10,nom:"Dernier train pour Busan",country_id:0,iddb:0})
createFilm({id:11,nom:"Héro",country_id:0,iddb:0})
createFilm({id:12,nom:"A toute épreuve",country_id:0,iddb:0})
createFilm({id:13,nom:"Le fils de Saul",country_id:0,iddb:0})
createFilm({id:14,nom:"Bad El-ouep City",country_id:0,iddb:0})
createFilm({id:15,nom:"Terrorism and Kebab",country_id:0,iddb:0})
createFilm({id:16,nom:"Mandela",country_id:0,iddb:0})
createFilm({id:17,nom:"Roma",country_id:0,iddb:0})
createFilm({id:18,nom:"3 idiots",country_id:0,iddb:0})
createFilm({id:19,nom:"Inspector Palmu's mistake",country_id:0,iddb:0})
createFilm({id:20,nom:"Fucking Âmâl",country_id:0,iddb:0})
createFilm({id:21,nom:"2016",country_id:0,iddb:0})
*/

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


app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
  }) 