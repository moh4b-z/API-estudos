const express = require('express')
const router = express.Router()
const searchController = require('../controllers/searchController')

router.get(
    '/all/with', 
    searchController.getSearchWith
)
router.get(
    '/all/', 
    searchController.getSearchAll
)
router.get(
    '/single/', 
    searchController.getSingleSearch
)

module.exports = router
