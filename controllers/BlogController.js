import Blogs from "../models/BlogModels.js"

class BlogControllers{
    async getBlog(req,res){
        try {
            const blogs = await Blogs.find({}).populate('categorys')
            if (blogs.length==0) {
                return res.status(400).json({
                    message:"Danh sách rỗng !"
                })
            }
            return res.status(200).json({
                message:"Lấy danh sách thành công !",
                blogs
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async createBlog(req,res){
        try {
            const data = await Blogs.create(req.body)
            return res.status(201).json({
                message:"Thêm blog thành công !",
                data
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async detailBlog(req,res){
        try {
            const data = await Blogs.findById(req.params.id)
            if (!data) {
                return res.status(404).json({
                    message:"Không tìm thấy blog",
                })
            }
            return res.status(200).json({
                message:"Lấy danh sách thành công !",
                data
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async updateBlog(req,res){
        try {
            const data = await Blogs.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.status(200).json({
                message:"Cập nhật blog thành công !",
                data
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
    async deleteBlog(req,res){
        try {
            const data = await Blogs.findByIdAndDelete(req.params.id)
            if (!data) {
                return res.status(404).json({
                    message:"Khôgn tìm thấy blog cần xóa !",
                })
            }
            return res.status(200).json({
                message:"Xóa blog thành công !",
            })
        } catch (error) {
            res.status(400).json({
                message:error
            })
        }
    }
}

export default BlogControllers