// getEntries()
//createEntry()
const entry = require('../models/entry')

const getEntries = async (req, res) => {
    try {
        let entries;
        if(req.query.email){  //si me pasas un mail, mándame todo de ese mail
            entries = await entry.getEntriesByEmail(req.query.email); //getEntriesByEmail está dentro de models/entry.js
        }
        else {  // si no, mandame todo 
            entries = await entry.getAllEntries();
        }
    
        res.status(200).json(entries); //pero siempre me devuelve algo: []] con entries encontradas
        
    } catch (error) {
        console.log(error)
        res.status(404).json("not found!!")
    }
}


//Crear entry por email 
// const createEntry = async(req, res) => {
//     try {
        
//         const newEntry = req.body; // {title, content, email, category} los datos llegan en este formato y orden
//         const response = await entry.createEntry(newEntry)
//         res.status(201).json({
//             "items_created":response,
//             data: newEntry
//         })
//     } catch (error) {
//         res.status(400).json("bad request")
//     }
// }

//CREATE
const createEntry = async(req,res) =>{
    try {
        const newEntry = req.body;
        const response = await entry.createEntry(newEntry)
        res.status(201).json({"saved": response})
    } catch (error) {
        console.log(error);
        res.status(400).json('error_detail:' + error.detail, 'error_code:' + error.code)
    }
}

//UPDATE
const updateEntry = async(req,res) =>{
    try {
        const newEntry = req.body;
        if (req.body.title) {
            const response = await entry.updateEntry(newEntry)
            res.status(204).json({"updated": response})
        } else {
            res.status(400).json({"message": "petición mal formada"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json('error_detail:' + error.detail, 'error_code:' + error.code)
    }
}

//DELETE
const deleteEntry = async(req,res) =>{
    try {
        if (req.body.title) {
            const response = await entry.deleteEntry(req.body.title)
            res.status(200).json({"deleted": response})
        } else {
            res.status(400).json({"message": "no se ha borrado"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json('error_detail:' + error.detail, 'error_code:' + error.code)
    }
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
}