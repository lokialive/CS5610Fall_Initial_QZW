const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PositionSchema = new Schema({
    id:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    companyName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    JobDescription:{
        type:String
    }
})

module.exports = Position = mongoose.model("position",PositionSchema);