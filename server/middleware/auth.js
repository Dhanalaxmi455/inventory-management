const CryptoJs =require("crypto-js")

module.exports = (req,res,next)=>{
    try{
        const authHeader = req.get("Authorization");
        if(!authHeader){
            throw new Error("Authorization missing")
        }
        const token = authHeader.split(" ")[1];
        if(!token){
            throw new Error("token missing")
        }
        const decryptedBuffer = CryptoJs.AES.decrypt(token,"random secret key e.g:hd2w1bjnfwkr8y3tg");
        const decryptedString = decryptedBuffer.toString(CryptoJs.enc.Utf8);
        const tokenData = JSON.parse(decryptedString);
        req.isAuth= true;
        req.userId = tokenData.userId;
        req.email = tokenData.email;
        return next();
    }
    catch(error){
        console.log(error);;
        req.isAuth = false;
        return next();
    }
}