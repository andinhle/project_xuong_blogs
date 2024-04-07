import Categorys from "../models/CategoryModels.js"
class CategoryControllers{
    async getCategory(req,res){
        try {
            const categorys= await Categorys.find({})
            if (categorys.length===0) {
                return res.status(400).json({
                    message:"Danh sách rỗng !"
                })
            }
            res.status(200).json({
                message:"Lấy danh sách danh mục thành công !",
                categorys
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async createCategory(req,res){
        try {
            const data= await Categorys.create(req.body)
            res.status(201).json({
                message:"Thêm danh mục thành công !",
                data
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async updateCategory(req,res){
        try {
            const data= await Categorys.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json({
                message:"Cập nhật danh mục thành công !",
                data
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async detailCategory(req,res){
        try {
            const data= await Categorys.findById(req.params.id)
            if (!data) {
                return res.status(404).json({
                    message:"Không tìm thấy danh mục !",
                })
            }
            return res.status(200).json({
                message:"Lấy chi tiết danh mục thành công !",
                data
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async deleteCategory(req,res){
        try {
            const data= await Categorys.findByIdAndDelete(req.params.id)
            if (!data) {
                return res.status(404).json({
                    message:"Không tìm thấy danh mục cần xóa !",
                })
            }
            return res.status(200).json({
                message:"Xóa danh mục thành công !",
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
}

export default CategoryControllers