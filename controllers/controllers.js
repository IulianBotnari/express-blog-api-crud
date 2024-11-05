const carModel = require(`../data/carmodel.js`)

const fs = require(`fs`)


const addCarModel = (req, res)=>{
    const newCar = {
        id: req.body.id,
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year
    }

    carModel.push(newCar)

    fs.writeFileSync(`./data/carmodel.js`, `module.exports = ${JSON.stringify(newCar, null, 4)}`)


    return res.status(201).json(newCar)
}

module.exports = addCarModel