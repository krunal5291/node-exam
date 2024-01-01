const {Router} = require("express")
const { taskcreate, formui, taskdata, taskui, yourtask, tasklist, taskdel, taskupadte } = require("../controllers/task.controller")
const { auth } = require("../middlewares/auth")
const Troute = Router()

Troute.post("/taskcreate",auth , taskcreate)
Troute.get("/taskform" ,  auth ,formui)
Troute.get("/taskdata" , taskdata)
Troute.get("/taskui" , taskui)
Troute.get("/tasklist" , auth,yourtask)
Troute.get("/tasklistui" , tasklist)
Troute.delete("/taskdel/:id" , taskdel)
Troute.post("/taskupdate" , taskupadte)

module.exports = Troute