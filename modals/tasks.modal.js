const mongoose = require("mongoose")

const taskschema = new mongoose.Schema({
    userid : String,
    title : String,
    des : String,
    img : String,
    name : String,
})

const task = mongoose.model("task" , taskschema)

module.exports = task