import Joi from "joi";

const blogsValid=Joi.object({
    title:Joi.string().required().messages({
        "any.required":"Title không được để trống !"
    }),
    content:Joi.string().required().messages({
        "any.required":"Content không được để trống !"
    }),
    image:Joi.string().required().messages({
        "any.required":"Ảnh không được để trống !"
    }),
    author:Joi.string().required().messages({
        "any.required":"Tác giả không được để trống !"
    }),
    categorys:Joi.string().empty().messages({
        "string.empty":"Danh mục không được để trống !"
    })
})

export default blogsValid