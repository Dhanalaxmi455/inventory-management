const express = require("express");
require("dotenv").config;
const mongoose = require("mongoose");
const cors = require("cors");
const useRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter")
// const Auth = require("./middleware/auth")
const {json,urlencoded} = express;

mongoose.connect("mongodb://laxmi:OrzXFoym2OZLrlPa@ac-zpmnrcs-shard-00-00.ozbxalo.mongodb.net:27017,ac-zpmnrcs-shard-00-01.ozbxalo.mongodb.net:27017,ac-zpmnrcs-shard-00-02.ozbxalo.mongodb.net:27017/mongoIntro?ssl=true&replicaSet=atlas-zy2cse-shard-0&authSource=admin&retryWrites=true&w=majority");
const app = express();

app.use(cors());
app.use(json());
// app.use(Auth);
app.use(urlencoded({extended:false}));



app.use("/users",useRouter);
app.use("/product",productRouter);

app.listen(5000,()=>console.log("server porting at 5000"))