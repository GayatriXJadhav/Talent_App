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
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
});
//routes

app.use("/api",talentroutes);

app.use((req, res) => {
    console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ 
        message: 'Route not found',
        method: req.method,
        url: req.originalUrl
    });
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Db connected"))
.catch(err=>console.error("Db connection failed:",err));


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));