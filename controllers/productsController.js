
//CONTROLADOR - lógica de negocio de la app
const fetch = require('node-fetch');

const getProducts = async (req, res) => {
    if (req.params.id) {
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
            let products = await response.json(); //{}
            res.status(200).render('products', { "products": [products] }); // Pinta datos en el pug
            //el .status(200/404) te indica que ha ido todo bien (código de error - imgs gatitos)
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).render('products', { "products": [] }); // Para controlar el error en caso de que se vaya la API
            //si falla la APi, nos manda un objeto vacío (array vacío) sin objetos = pantalla en blanco
        }
    } else {
        try {
            let response = await fetch(`https://fakestoreapi.com/products`); // []
            let products = await response.json(); // []
            res.status(200).render('products', { products }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            let products = []; //esta variable es el products moradito de la línea de abajo, podemos no escribir esta línea
            res.status(404).render('products', {products:[]});
        }
    }
}

// const createProduct = async (req, res) => {

//     console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
//     const newProduct = req.body; // {} nuevo producto a guardar
//       // Líneas
//     //para guardar 
//     // en una BBDD SQL o MongoDB

//     try {
//         let response = await fetch('https://fakestoreapi.com/products', {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newProduct)
//         })

//         let answer = await response.json(); // objeto de vuelta de la petición
//         console.log("Este es el console.log de lo que devuelve la api",answer);
//         res.status(201).send(`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`);

//     } catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//         res.status(400).send(`Error guardando producto ${answer.title}`)
//     }
 
// }

// const deleteProduct= async (req,res)=>{    
//     const msj ="Has enviado un DELETE";
//     console.log(msj);
//     res.send(msj);
// }
  

// *****se crea primero las funciones por separado fuera y luego las incluye todas en un objeto: 

module.exports = {
getProducts,
// createProduct,
//editProduct,
// deleteProduct
}


// OTRA MANERA

// const products = {
//     getProducts: async (req, res) => {
//         if (req.params.id) {
//             try {
//                 let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
//                 let products = await response.json(); //{}
//                 res.render('products', { "products": [products] }); // Pinta datos en el pug
//             }
//             catch (error) {
//                 console.log(`ERROR: ${error.stack}`);
//             }
//         } else {
//             try {
//                 let response = await fetch(`https://fakestoreapi.com/products`); // []
//                 let products = await response.json(); // []
//                 res.render('products', { products }); // Pinta datos en el pug
//             }
//             catch (error) {
//                 console.log(`ERROR: ${error.stack}`);
//             }
//         }
//     },
//     createProduct: async (req, res) => {
//         console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
//         const newProduct = req.body; // {} nuevo producto a guardar
    
//         // Líneas
//         //para guardar 
//         // en una BBDD SQL o MongoDB
    
//         let response = await fetch('https://fakestoreapi.com/products', {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newProduct)
//         })
//         let answer = await response.json(); // objeto de vuelta de la petición
//         console.log("Este es el console.log de lo que devuelve la api",answer);
    
//         res.send(`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`);
//     },
//     deleteProduct: async (req, res) =>  console.log("Borrando pruducto"),
//     editProduct: async (req, res) =>  console.log("Borrando pruducto")
// }

// module.exports = products;