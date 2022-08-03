
//CONTROLADOR - lógica de negocio de la app
const fetch = require('node-fetch');

const getProducts = async (req, res) => {
    if (req.params.id) {
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
            let products = await response.json(); 
            res.status(200).json(products); //devuelve un único producto en formato objeto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({"message": "producto no encontrado"}); // si no lo encuentra nos manda un objeto vacío {con el sms que le hemos puesto}
        }
    } else {
        try {
            let response = await fetch(`https://fakestoreapi.com/products`); // []
            let products = await response.json(); // []
            res.status(200).json({ products }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            let products = []; //esta variable es el products moradito de la línea de abajo, podemos no escribir esta línea
            res.status(404).json({"message":" no encontrado"});
        }
    }
}

const createProduct = async (req, res) => {

    console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body; // {} nuevo producto a guardar
      // Líneas
    //para guardar 
    // en una BBDD SQL o MongoDB

    try {
        let response = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })

        let answer = await response.json(); // objeto de vuelta de la petición
        console.log("Este es el console.log de lo que devuelve la api",answer);
        res.status(201).json({"message": `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`});

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({"message": `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`})
    }
 
}

const deleteProduct= async (req,res)=>{    
    const msj ="Has enviado un DELETE";
    console.log(msj);
    res.json({"message": msj});
}
  

// *****se crea primero las funciones por separado fuera y luego las incluye todas en un objeto: 

module.exports = {
getProducts,
createProduct,
//editProduct,
deleteProduct
}