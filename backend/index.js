const express = require("express")
const mongoose = require ('mongoose')
const cors = require('cors')

const app= express()
app.use (express.json())
app.use(cors())

mongoose.connect( );

app.post

app.listen(3001,()=>{
    console.log('server at port 3001')
})