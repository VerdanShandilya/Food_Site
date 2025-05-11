const jwt = require('jsonwebtoken')


const authmiddleware = async (req,res,next) =>{
    const {token} = req.headers;
    if(!token)
        return res.status(401).json({success:false,msg:"Access denied"})
    try{
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        req.body.userId=decoded.id;
        next();
    }
    catch(error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

module.exports = {authmiddleware}