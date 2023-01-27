const express = require ("express")
const connectdb = require("./config/connectdb")
const contactRouter = require('./routes/contact')
const app  = express()

const port = 5000


app.use(express.json())
//connect the database 
connectdb()

app.use('/api/user',contactRouter)

app.listen(port,err =>{
    err?console.log(err) : console.log (`you did it go to the port num : ${port}`)
})