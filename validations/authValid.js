import Joi from "joi";

const registerValid=Joi.object({
    username:Joi.string().empty().min(8),
    email:Joi.string().required().email(),
    password:Joi.string().required().min(8)
})

const loginValid=Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required().min(8)
})

export {registerValid,loginValid}