import express from "express";
import connectDB from "./config/connectDB.js";
import Router from "./routers/router.js";
import { PORT, DB_URL } from "./util/getEnv.js";
const app =express()
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
Router(app)
app.listen(PORT, ()=>{
    //connect database mongoose db
    connectDB(DB_URL)
    console.log(`Đang chạy server http://localhost:${PORT}`)
})