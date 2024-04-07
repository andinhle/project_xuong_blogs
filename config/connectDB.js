import mongoose from "mongoose"

const connectDB= async (DB_URL)=>{
    try {
        await mongoose.connect(DB_URL)
        console.log(`Kết nối database thành công !`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB