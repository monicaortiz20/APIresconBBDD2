
//Rutas de productos
const express = require('express');

// const productsController = require("../controllers/productsController")  // importa el controlador

const productsRouter = express.Router();

// // const checkApiKey = require('../middlewares/auth_API_KEY')

// // /products
// productsRouter.get('/:id?', productsController.getProducts);
// productsRouter.post('/', checkApiKey, productsController.createProduct);//en estas 2 líneas le decimos que NO pueden postear o borrar nadie que no tenga apikey
// productsRouter.delete("/",checkApiKey, productsController.deleteProduct); //exigimos que tengan apikey para hacer cualq de esas 2 opciones
  

module.exports = productsRouter; //módulo de rutas