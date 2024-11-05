const express = require(`express`)
const router = express.Router()

const carController = require(`../controllers/controllers.js`)
router.post(`/cars`, carController)

module.exports = router