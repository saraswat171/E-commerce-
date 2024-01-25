const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: String,
    email: { unique: true, type: String },
    password: String
})

module.exports = mongoose.model("users", UsersSchema)