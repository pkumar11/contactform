const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({

    fullName : "String",
    email : "String",
    phoneNumber : "Number",
    message : "String",
    fileToUpload:'String'
})

const CONTACTFORM = mongoose.model("CONTACTFORM", contactSchema)

module.exports = CONTACTFORM