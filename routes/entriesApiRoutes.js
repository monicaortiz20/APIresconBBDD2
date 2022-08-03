const entry = require('../models/entry') //conectamos ficheros

const express = require('express');

const entriesApiController = require("../controllers/entriesApiController")  // importa el controlador

const entriesApiRouter = express.Router();

entriesApiRouter.get("/entries", entriesApiController.getEntries)
entriesApiRouter.post("/entries", entriesApiController.createEntry)
entriesApiRouter.put("/entries", entriesApiController.updateEntry)
entriesApiRouter.delete("/entries", entriesApiController.deleteEntry)


//ENDPOINTS:
//GET http://localhost:3000/entries para que nos dé todas las entries 
//GET http://localhost:3000/entries?email=hola@gmail.com para que nos dé solo una de las entries por email
//POST http://localhost:3000/entries para que nos postee una nueva entry

module.exports = entriesApiRouter;
