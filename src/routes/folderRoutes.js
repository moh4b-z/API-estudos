const express = require('express')
const router = express.Router()
const folderController = require('../controllers/folderController')

router.get(
    '/v1/inside/root', 
    folderController.getInsideRoot
)
router.get(
    '/v1/inside/root/folder', 
    folderController.searchSingleFolder
)

module.exports = router
