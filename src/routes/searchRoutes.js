const express = require('express')
const router = express.Router()
const searchController = require('../controllers/searchController')

router.get(
    '/all/', 
    searchController.getSearchAll
)

module.exports = router
