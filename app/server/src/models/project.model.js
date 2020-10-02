const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProjectSchema = new Schema({

    name:{
        type: String,
        required: true 
    },
    desciption:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    dateModified: {
        type: Date
    }

})

mongoose.exports = Project = mongoose.model("users", ProjectSchema)