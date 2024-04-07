import { model,Schema } from "mongoose";
const AuthModels=new Schema({
    username:{
        type:String,
        min:8
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    role:{
        type:String,
        default:"menber"
    }
},{
    timestamps: true,
    versionKey: false
})

const Users = model('users',AuthModels)

export default Users