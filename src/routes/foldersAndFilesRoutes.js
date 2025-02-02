const express = require('express')
const router = express.Router()
const foldersAndFilesController = require('../controllers/foldersAndFilesController')

router.get(
    '/search/', 
    foldersAndFilesController.getSearch
)

module.exports = router
