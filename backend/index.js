const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/Users')

const app = express()
app.use(express.text())
app.use(express.urlencoded(true))

app.use(express.json())
app.use(cors())

try {
    mongoose.connect("mongodb+srv://chetan1150:Ez9bVfwafkBCcG8x@cluster0.hzawyqo.mongodb.net/users");
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}

app.post('/usersinfo', async (req, res) => {
    const { name, email, password } = req.body;
    console.log("req.body", req.body);
    try {
        const existingUser = await UsersModel.findOne({ email })

        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json("Email already exist");
        }
        const newuser = await UsersModel.create({ name, email, password })
        console.log('newuser', newuser)
        res.status(200).json(newuser)
    }


    catch (err) { res.status(500).json(err) }
  
})

app.post('/logininfo', async (req, res) => {
    const { email, password } = req.body;
    console.log("req.body", req.body);
    await UsersModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('success')
                }
                else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("no record existed")
            }
        })
})

app.listen(8080, () => {
    console.log('server at port 38080')
})