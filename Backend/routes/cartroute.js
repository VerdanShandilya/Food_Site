const express = require('express')
const {addtocart,removefromcart,fetchusercart} = require('../controllers/CartController')
const {authmiddleware}= require('../middleware/auth')
const cartdata = express.Router();


cartdata.post("/add",authmiddleware,addtocart);

cartdata.post("/remove",authmiddleware, removefromcart)

cartdata.get("/get",authmiddleware, fetchusercart)

module.exports = cartdata