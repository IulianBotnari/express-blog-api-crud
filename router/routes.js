const express = require(`express`)
const router = express.Router()

const carController = require(`../controllers/controllers.js`)
router.get(`/cars`, carController.carModelApi)
router.post(`/cars`, carController.addCarModel)

module.exports = router