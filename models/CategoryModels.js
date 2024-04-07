import { model,Schema } from "mongoose";
const CategorysModels=new Schema({
    name:{
        type:String,
        required:true,
        min:6
    }
},{
    timestamps: true,
    versionKey: false
})

const Categorys= model('categorys',CategorysModels)

export default Categorys