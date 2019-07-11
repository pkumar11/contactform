const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://pankaj:password@cluster0-sybmy.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

module.exports.CONTACTFORM = require('./contactform')