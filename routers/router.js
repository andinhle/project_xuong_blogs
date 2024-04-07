import authRoute from "./authRoute.js"
import blogRoute from "./blogRoute.js"
import categoryRoute from "./categoryRoute.js"

const Router=(app)=>{
    app.use('/categorys',categoryRoute)
    app.use('/blogs',blogRoute)
    app.use('/auth',authRoute)
}

export default Router