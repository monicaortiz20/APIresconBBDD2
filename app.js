
//para crear el primer servidor
//primero siempre los módulos externos, los que traigo de fuera
const express = require('express');
const morgan = require('morgan');

const emoji = require('emoji-whale');
const cowsay = require('cowsay2');    // para que nos saque a la vaca pintada
const whale = require('cowsay2/cows/whale');    // para que nos saque a la ballena pintada
const owl = require('cowsay2/cows/owl');

const productsRouter = require('./routes/productsRoutes');  //rutas de productos importadas
const productsApiRoutes= require('./routes/productsApiRoutes')
const entriesApiRoutes= require('./routes/entriesApiRoutes')
const authorsApiRoutes = require('./routes/authorsApiRoutes')


//después mis propios módulos, los que me creo yo
// const calc = require('./utils/calculator')    //traemos mi propio módulo que nos hemos creado
//const calc = require('./utils/calculator.js')  //otra manera de poner lo mismo


//tu middleware error404: importamos
const manage404 = require('./middlewares/error404')
const checkApiKey = require('./middlewares/auth_API_KEY')


const app = express();
const port = 3000;


//motor de vistas - view engine
app.set('view engine', 'pug');
app.set('views','./views');

//cuando le hacemos un post a la BBDD, tenemos que decirle que le mandamos un json(), para que sepa leerlo
app.use(express.json());
// app.use(checkApiKey); //middleware para todas las rutas


//WEB!!! - DEVUELVE .PUGS
//http://localhost:3000/products  GET
app.use("/products", productsRouter)  //el middleware afectaría a la ruta /products
// app.use("/entries", entriesRouter)
// app.use("/products",checkApiKey, productsRouter) - con middleware de acceso la ruta de /products, porque le hemos puesto la funciuón checkApi


//API - DEVUELVE .JSON
//http://localhost:3000/api/products  GET del API

app.use('/api/products', productsApiRoutes);
app.use('/api', entriesApiRoutes);
app.use('/api', authorsApiRoutes);

//esta barra sola, nos indica el index de la web, la home. Si pongo /algo, voy a una pag
app.get('/', (req, res) => {
  console.log(cowsay.say('Hi, Ariel!', { cow: whale }));
  console.log(cowsay.say('Hoo-ooh!', { cow: owl }));
  //res.send('Hello World!'+emoji)
  let msj = "Hola desde mi primer servidor :) !!!" + emoji;
  res.render("my_view.pug", {section:"Home", msj}); // .pug, es una plantilla con "huecos", con lo escrito a 
})                                                  //posterioiri esos huecos se llenan y me lo imprime en el html


//creo la pag de /pokemon
app.get('/pokemon/:name?', (req, res) => {
  console.log(req.params);
  let msj = "";
  if (req.params.name) {    //si hay parámentros entr aquí
      msj ='Aquí te envío a:' + req.params.name
  } else {    // si no hay parámetros, entra aquí
      msj = 'Aquí te envío a todos los pokemon del planeta'
  }
  console.log(cowsay.say(msj, { cow: owl }));  //imprime buho con mesj
  //res.send(msj + " " + emoji)
  res.render("my_view", {section:"Pokemon", msj});
})

// //creo la pag de /perritos
app.get('/perritos', (req, res) => {      //MÉTODO GET - para coger info
  let msj = "¿cuánto son 2+2?: "+calc.add(2,2);
  console.log(cowsay.say(msj, { cow: owl }));
  // let msj2 = "Aqui enviará mis perritos" + msj + emoji;
  // res.send('Aquí te enviaría mis perritos y...'+msj+" "+emoji)
  res.render("my_view", {section:"Perritos", msj:msj2});

})

app.use(manage404);

app.listen(port, () => {
  
  console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: whale }));
})

//----------------------------------