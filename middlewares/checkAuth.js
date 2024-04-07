import jwt from 'jsonwebtoken'
import { SECRET } from '../util/getEnv.js'
import Users from '../models/AuthModel.js'
const checkAuth= async (req,res,next)=>{
    try {
        const token = await req.headers.authorization.split(" ")[1]
        const checkToken = jwt.verify(token,SECRET)
        const checkUser= await Users.findById(checkToken._id)
        req.data=checkUser
        next()
    } catch (error) {
        res.json({
            message:"Bạn không có quyền truy cập !"
        })
    }
}

export default checkAuth