const express = require('express')

const PersonController = require('../controller/PersonController')

let router = express.Router()


router
    .get('/', PersonController.index)
    .get('/:name', PersonController.show)

module.exports = router