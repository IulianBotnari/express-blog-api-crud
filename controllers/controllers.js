const carModel = require(`../data/carmodel.js`)

const fs = require(`fs`)

const carModelApi = (req, res) =>{
    return res.status(200).json(carModel)
}


const addCarModel = (req, res)=>{
    const newCar = {
        id: req.body.id,
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year
    }
    
    carModel.push(newCar)
    
    fs.writeFileSync(`./data/carmodel.js`, `module.exports = ${JSON.stringify(carModel, null, 4)}`)


    return res.status(201).json(carModel)
}

module.exports = {
    addCarModel,
    carModelApi
}