const express = require(`express`)

const app = express()
const host = "http://127.0.0.1:"
const port = 3000

app.listen(port, (res, req)=>{
    console.log(`Server is running on: ${host}${port}`);
    
})

const addRoute = require(`./router/routes.js`)

app.use(express.json())

app.use(`/`, addRoute)

