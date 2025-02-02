const express = require('express')
const router = express.Router()
const folderController = require('../controllers/folderController')

router.get(
    '/root/inside/', 
    folderController.getInsideRoot
)
router.get(
    '/root/inside/folder/', 
    folderController.getSearchSingleFolder
)
router.get(
    '/root/all/folder/', 
    folderController.getSearchAllFolder
)

module.exports = router
