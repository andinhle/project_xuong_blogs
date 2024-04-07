import express from 'express'
import UserControllers from '../controllers/UserControllers.js'
import checkValid from '../util/checkValid.js'
import { loginValid, registerValid } from '../validations/authValid.js'


const authRoute=express.Router()
const UserControll= new UserControllers()
authRoute.post('/register',checkValid(registerValid),UserControll.register)
authRoute.post('/login',checkValid(loginValid),UserControll.login)
export default authRoute