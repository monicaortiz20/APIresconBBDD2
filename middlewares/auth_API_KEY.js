const checkApiKey = function (req, res, next){
    if(req.query.Api_Key){
        //si hay ai key te doy la info fe la api
        next(); //pasa a la siguiente tarea
    }else{
        // si no me das api KeyboardEvent, no te la doy
        // mando mensaje de error
        res.status(401).send("Error. API KEY no introducida")
    }
}

//exportamos la función:
module.exports = checkApiKey;