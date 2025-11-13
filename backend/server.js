const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");

const talentroutes=require("./routes/talentroute");

dotenv.config();

const app=express();

//middleware
app.use(cors());
app.use(express.json());
//routes
app.use("/api",talentroutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Db connected"))
.catch(err=>console.error("Db connection failed:",err));


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));