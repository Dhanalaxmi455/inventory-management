const {Router} = require("express");
const User = require("../model/userSchema");
const {createUser,login} = require("../controller/userController");


const userRouter = new Router();

userRouter.post("/createUser",async(req,res)=>{
    try {
        const newUser = await createUser(req);
        res.send(newUser);
    } catch (error) {
        res.send(error.message);
    }
});

userRouter.post("/login",async(req,res)=>{
    try {
        const data = await login(req);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

userRouter.get("/",async(req,res)=>{
    try {
        if(!req.isAuth){
            throw new Error("user not logged in");
        }
        const userData = await User.findById(req.userId);
        res.send(userData);
    } catch (error) {
        res.send(error.message);
    }
} )

userRouter.get("/users",async (req,res)=>{
    try{
 const users = await User.find({});
 res.send(users);
    }
    catch(error){
res.send(error.message)
    }
})

userRouter.patch("/updateUser",async (req,res)=>{
    try{
        if(!req.isAuth){
            throw new Error("user not logged in");
        }
        const data = {...req.body};
        delete data.id;
 const alteredUser = await User.findByIdAndUpdate(req.userId,{...data});
 res.send(alteredUser);
    }
    catch(error){
res.send(error.message)
    }
})

userRouter.delete("/deleteUser",async (req,res)=>{
    try{
        if(!req.isAuth){
            throw new Error("user not logged in");
        }
 const alteredUser = await User.findByIdAndDelete(req.userId);
 res.send(alteredUser);
    }
    catch(error){
res.send(error.message)
    }
})


module.exports = userRouter;