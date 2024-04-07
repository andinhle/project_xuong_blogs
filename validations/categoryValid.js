import Joi from "joi";

const categoryValid=Joi.object({
    name:Joi.string().required().messages({
        "any.required":"Tên danh mục không được để trống !"
    })
})

export default categoryValid