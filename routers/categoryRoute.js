import express from 'express'
import CategoryControllers from '../controllers/CategoryControllers.js'
import checkValid from '../util/checkValid.js'
import categoryValid from '../validations/categoryValid.js'

const categoryRoute=express.Router()
const CategoryControll= new CategoryControllers()
categoryRoute.get('',CategoryControll.getCategory)
categoryRoute.get('/:id',CategoryControll.detailCategory)
categoryRoute.post('',checkValid(categoryValid),CategoryControll.createCategory)
categoryRoute.put('/:id',checkValid(categoryValid),CategoryControll.updateCategory)
categoryRoute.delete('/:id',CategoryControll.deleteCategory)

export default categoryRoute