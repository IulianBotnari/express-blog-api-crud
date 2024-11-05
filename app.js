const express = require('express')

const app = express()
const port = 3000
const host = "http://127.0.0.1:"


const postsRouter = require('./routers/posts.js')


app.use(express.json())

app.use(express.static('public'))

app.use('/', postsRouter)






app.listen(port, (req, res)=>{
    console.log(`Server is running at ${host}${port}`)
})
