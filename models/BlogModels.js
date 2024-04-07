import { model,Schema } from "mongoose";
const BlogModels=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    categorys:{
        type:Schema.Types.ObjectId,
        ref:'categorys',
    }
},{
    timestamps: true,
    versionKey: false
})

const Blogs= model('blogs',BlogModels)

export default Blogs