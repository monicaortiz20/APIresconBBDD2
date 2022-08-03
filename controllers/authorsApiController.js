const authors = require('../models/authors')



const getAuthors = async (req, res) => {
    try {
        let authores;
        if(req.query.email){  
            authores = await authors.getAuthorsByEmail(req.query.email);
        }
        else {  
            authores = await authors.getAllAuthors();       //falta por crear estsa función
        }
    
        res.status(200).json(authors);
        
    } catch (error) {
        console.log(error)
        res.status(404).json("not found!")
    }
}








module.exports = {
    getAuthors,
    // createEntry,
    // updateEntry,
    // deleteEntry
}