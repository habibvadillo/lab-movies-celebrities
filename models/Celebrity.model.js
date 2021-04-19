const mongoose = require('mongoose')


let CelebritySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    catchPhrase:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Celebrity', CelebritySchema)

