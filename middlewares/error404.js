// esta carpeta es para pasar los filtros que tiene la API. EJ:
// hago un req, si soy el admin, me da la info, sino sale el erorr 404

const manage404 = function (req,res,next){    // para contemplar el error al buscar una ruta errónea, no reconoce la ruta o no existe
    res.status(404).send('Error! 404 not found :) ');
  };

  module.exports = manage404;