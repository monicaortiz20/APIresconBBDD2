const express = require('express');

const authorsApiController = require("../controllers/authorsApiController")

const authorsApiRouter = express.Router();


authorsApiRouter.get("/authors", authorsApiController.getAuthors)
// authorApiRouter.post("/author", authorApiController.getAuthor)
// authorApiRouter.put("/author", authorApiController.getAuthor)
// authorApiRouter.delete("/author", authorApiController.getAuthor)


module.exports = authorsApiRouter;