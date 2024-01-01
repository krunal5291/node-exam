const task = require("../modals/tasks.modal")

const taskcreate = async (req , res) =>{
    let obj = {
        name : req.body.name,
        des : req.body.des,
        img : req.body.img,
        title : req.body.title,
        userid : req.body.userId
    }
    let data = await task.create(obj)
    res.json("task is created")
}
const formui = (req , res) =>{
    res.render("taskform")
}

const taskdata = async(req , res) =>{
    let data = await task.find()
    res.json(data)
}

const taskui = (req , res) =>{
    res.render("taskitem")
}

const yourtask = async(req , res) =>{
    let data = await task.find({userid : req.body.userId})
    res.json(data)
}

const tasklist = (req , res) =>{
    res.render("tasklist")
}

const taskdel = async(req , res) =>{
    let {id} = req.params

    let data = await task.findByIdAndDelete(id)
    res.json("deleted")
}
const taskupadte = async(req , res) =>{
    let {title , des , img , name , _id} = req.body
    
    let data = await task.findByIdAndUpdate(_id , req.body)
    res.redirect("/task/tasklistui")
}
module.exports = {taskcreate , formui , taskdata , taskui , yourtask , tasklist , taskdel , taskupadte}