const userModel = require("../models/usermodel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')
const dotenv = require('dotenv')
dotenv.config();



const createToken = (id) =>{
    return jwt.sign({id},process.env.SECRET_KEY);
}

const loginuser = async (req, res) =>{
    const {email,password} = req.body
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid Email"});
        }
        const ismatch = await bcrypt.compare(password,user.password);

        if(!ismatch){
            return res.status(401).json({message:"Incorrect Password"});
        }
        const token = createToken(user._id);
        res.json({token});
    }
    catch (error){
        registeruser.json({message:"could not fetch data"});
    }
}


const registeruser = async (req,res) =>{
    const {name,email,password} = req.body
    try{
        const exists= await userModel.findOne({email})
        if(exists){
            return res.status(400).json({message:"Email already exists"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalid email"})
        }
        if(password.length<8){
            return res.status(400).json({message:"Password should be at least 8 characters long"});
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newuser = new userModel({
            name:name,
            email:email,
            password:hashedpassword
        })
        const user=await newuser.save()
        const token = createToken(user._id)
        res.status(201).json({success:true,token})
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:"could not create user"})
    }
}

module.exports = {loginuser,registeruser}