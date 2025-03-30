const express = require('express')
const { addfood, listfood, removefood } = require('../controllers/foodController')
const multer = require('multer')

const foodRouter = express.Router();


//Image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb) =>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addfood)

foodRouter.get("/list",listfood)

foodRouter.post("/remove",removefood)



module.exports = foodRouter