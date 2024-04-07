const checkIsAdmin= async (req,res,next)=>{
    try {
        if (req.data.role!=='admin') {
            return res.status(403).json({
                message:"Bạn không phải Admin !"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}

export default checkIsAdmin