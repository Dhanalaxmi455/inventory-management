const User = require("../model/userSchema");
const {genSalt,compare,hash} = require("bcrypt");
const CryptoJs = require("crypto-js");




const createUser = async({body})=>{
    try {
        const checkEmail = await User.find({email:body.email});
        if(checkEmail.length){
            throw new Error("Email already registered")
        }
        const checkMobile = await User.find({mobile:body.mobile});
        if(checkMobile.length){
            throw new Error("Mobile already registered")
        }
        const checkUsername = await User.find({username:body.username});
        if(checkUsername.length){
            throw new Error("Username already registered")
        }

        const salt = await genSalt();
        const hashedPass = await hash(body.password,salt);
        const data = await User.create({
           ...body,
            password: hashedPass,
            createdAt:new Date(),
            updatedAt:new Date()
         })
         return data;

    } catch (error) {
        return error.message;
    }
};



const login = async ({body})=>{
    try {
        const {email,password} = body;
        const checkEmail = await User.find({email});
        console.log(checkEmail);
        if(!checkEmail.length){
            throw new Error("Email not registered")
        }
    const {password:hashedPass} = checkEmail[0];
    const checkPass= await compare(password,hashedPass);
    if(checkPass){
        const token = CryptoJs.AES.encrypt(JSON.stringify(
            {
                userId:checkEmail[0]._id,
                email:checkEmail[0].email,
            }
        ),
        "random secret key e.g :qwe123456yhgbfdsew24356").toString();
        return({
            token,
            userId:checkEmail[0]._id,
                email:checkEmail[0].email,

        });

    }
    else{
        throw new Error("wrong password");
    } 
    } catch (error) {
        return error.message;
    }
}


module.exports = {createUser,login}