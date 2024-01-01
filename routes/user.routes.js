const {Router} = require("express")
const { registerui, usercreate, loginui, login, logout } = require("../controllers/user.controller")
const Uroute = Router()

Uroute.get("/register" , registerui)
Uroute.post("/register" , usercreate)
Uroute.get("/login" , loginui)
Uroute.post("/login" , login)
Uroute.get("/logout" , logout)


module.exports = Uroute