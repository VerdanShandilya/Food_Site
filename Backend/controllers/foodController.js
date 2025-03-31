const foodModel = require('../models/foodModels')
const fs = require('fs')

//add food item
const addfood = async (req,res) =>{
    const {name,description,price,category} = req.body;
    const image =req.file.filename;
    const food = new foodModel({
        name:name,
        description:description,
        price:price,
        category:category,
        image:image
    })
    try{
        await food.save();
        res.status(201).json(food);
    }
    catch(error){
        console.log(error);
        res.status(401).json(error);
    }
}

//all food list
const listfood = async (req,res) =>{
    try{
        const foods = await foodModel.find({});
        res.json(foods)
    }
    catch (error){
        console.log(error);
        res.json(error);
    }
}

// remove food item
const removefood = async (req,res) =>{
    try{
        if (!req.body.id) {
            return res.status(400).json({ success: false, message: "Food ID is required" });
        }
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.status(200).json({success: true,message:"food removed"});
    }
    catch (error){
        console.log(error);
        res.status(401).json({messege:"could not delete"})
    }
}
module.exports = {addfood, listfood, removefood}