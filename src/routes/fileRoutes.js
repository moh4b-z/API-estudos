const express = require('express')
const router = express.Router()
const fileController = require('../controllers/fileController')

router.get(
    '/link/', 
    fileController.getPathAndLink
)

module.exports = router
