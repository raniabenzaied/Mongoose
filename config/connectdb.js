const mongoose = require("mongoose")

const connectdb = async () =>{
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log("you are connected to the db ")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectdb ;