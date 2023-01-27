const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({

    name:String,
    age:Number,
    addresse:String,
    email:{
        type : String,
        require:true,
        unique: true,
    }
})

module.exports = mongoose.model('RaniaContact',ContactSchema)