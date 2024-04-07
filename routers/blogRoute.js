import express from 'express'
import BlogControllers from '../controllers/BlogController.js'
import checkValid from '../util/checkValid.js'
import blogsValid from '../validations/blogsValid.js'
import checkAuth from '../middlewares/checkAuth.js'
import checkIsAdmin from '../middlewares/checkIsAdmin.js'

const blogRoute=express.Router()
const BlogControll= new BlogControllers()

blogRoute.get('',BlogControll.getBlog)
blogRoute.get('/:id',BlogControll.detailBlog)
blogRoute.use(checkAuth,checkIsAdmin)
blogRoute.post('',checkValid(blogsValid),BlogControll.createBlog)
blogRoute.put('/:id',checkValid(blogsValid),BlogControll.updateBlog)
blogRoute.delete('/:id',BlogControll.deleteBlog)


export default blogRoute