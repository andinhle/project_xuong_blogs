import Users from "../models/AuthModel.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { SECRET } from "../util/getEnv.js"
class UserControllers{
    async register(req,res){
        try {
            //kiểm tra email đã tồn tại chưa ?
            const {username,password,email}=req.body

            const checkEmail= await Users.findOne({email})
            if (checkEmail) {
                return res.status(400).json({
                    message:"Email đã tồn tại !"
                })
            }
            //mã hóa mật khẩu 
            const hashPass= await bcryptjs.hash(password,10)

            //hanlde register
            const data = await Users.create({
                username,
                email,
                password:hashPass
            })

            data.password=undefined
            res.status(201).json({
                message:"Đăng kí thành công !",
                data
            })
        } catch (error) {
            return res.status(400).json({
                message:error
            })
        }
    }
    async login(req,res){
        try {
            //kiểm tra tài khoản ? 
            const {username,password,email}=req.body
            
            const checkUser= await Users.findOne({email})
            if (!checkUser) {
                return res.status(400).json({
                    message:"Tài khoản hoặc mật khẩu không đúng ? "
                })
            }
            const checkPass=await bcryptjs.compare(password,checkUser.password)
            if (!checkPass) {
                return res.status(400).json({
                    message:"Tài khoản hoặc mật khẩu không đúng ? "
                })
            }
            const createToken=jwt.sign({_id:checkUser._id},SECRET,{
                expiresIn:'2h'
            })
            return res.status(200).json({
                message:"Đăng nhập thành công !",
                token:createToken
            })
        } catch (error) {
            return res.status(400).json({
                message:error
            })
        }
    }
}

export default UserControllers