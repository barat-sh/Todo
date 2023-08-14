const jwt = require("jsonwebtoken");


// secret key
const SECRET = "s3cr3tk3y";


const generateToken = (payload) => {
    return jwt.sign(payload,SECRET)
}

const verify_token = (req,res,next) => {
    const auth = req.headers.token;
    console.log(auth)
    if (auth){
        jwt.verify(auth,SECRET,(err,result)=>{
            if (err){
                res.status(401)
            }
            next()
        })
    }else{
        res.sendStatus(401);
    }
}

module.exports = {generateToken,verify_token}