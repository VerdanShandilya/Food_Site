const userModel = require('../models/usermodel');


const addtocart =  async(req,res) =>{
    try{
        let userdata= await userModel.findOne({_id:req.body.userId});
        let cartdata= await userdata.cartData;
        if(!cartdata[req.body.itemId]){
            cartdata[req.body.itemId] = 1;
        }
        else{
            cartdata[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:cartdata});
        res.json({success:true,message:"data updated"});
    }
    catch(error){
        res.json({success:false,message:"could not add data"});
    }
}

const removefromcart = async  (req,res) =>{
    try{
        let userdata= await userModel.findOne({_id:req.body.userId});
        let cartdata= await userdata.cartData;
        if(cartdata[req.body.itemId]>0){
            cartdata[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:cartdata});
        res.json({success:true,message:"data updated"});
    }
    catch(error){
        res.json({success:false,message:"could not add data"});
    }

}

const fetchusercart = async (req,res) =>{

}

module.exports = {addtocart,removefromcart,fetchusercart}