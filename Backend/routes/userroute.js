const express=require('express');
const {loginuser, registeruser} = require('../controllers/UserController')


const user=express();

user.post('/register',registeruser)
user.post('/login',loginuser)

module.exports= user;
