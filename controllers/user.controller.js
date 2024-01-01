const user = require("../modals/user.modal")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { use } = require("../routes/user.routes")


const registerui = (req , res) =>{
    res.render("register")
}

const usercreate = async(req , res) =>{
    let {username , password , email , role} = req.body

    let data = await user.findOne({email : email})

    if(data){
        res.redirect("login")
    }
    else{
        bcrypt.hash(password , 5 , async(err , hash) =>{
            if(err){
                res.json(err)
               }
            else{
                let obj = {
                    username : username,
                    email : email,
                    password : hash
                }
                let data = await user.create(obj)
                let token = jwt.sign({id : data._id} , "pass")
                res.cookie("token" , token).json(data)
            }
        })
    }
    
}

const loginui = (req , res) =>{
    res.render("login")
}

const login = async(req ,res)=>{
    let {email , password} = req.body
    let data = await user.findOne({email : email})

    if(data){
        bcrypt.compare(password , data.password , (err , result) =>{
            if(result){
                let token = jwt.sign({id : data._id} , "pass")
                res.cookie("token" , token).redirect("/task/taskform")
            }
            else{
                res.json("password is incorrect")
            }
        })
    }
    else{
        res.redirect("/user/register")
    }
}

const logout = (req , res)=>{
    res.clearCookie("token").json("logout")
}

module.exports = {registerui , usercreate , loginui , login , logout}