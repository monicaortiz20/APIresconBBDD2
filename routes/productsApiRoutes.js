
//Rutas de productos
const express = require('express');

const productsApiController = require("../controllers/productsApiController")  // importa el controlador

const productsApiRouter = express.Router();

const checkApiKey = require('../middlewares/auth_API_KEY')

// /products
productsApiRouter.get('/:id?', productsApiController.getProducts);
productsApiRouter.post('/', checkApiKey, productsApiController.createProduct);//en estas 2 líneas le decimos que NO pueden postear o borrar nadie que no tenga apikey
productsApiRouter.delete("/",checkApiKey, productsApiController.deleteProduct); //exigimos que tengan apikey para hacer cualq de esas 2 opciones
  

module.exports = productsApiRouter; //módulo de rutas


// http://localhost:3000/api/products --> para que sea el GET de /products
// http://localhost:3000/api/products --> para que sea el POST de /products
// http://localhost:3000/api/products --> para que sea el DELETE de /products