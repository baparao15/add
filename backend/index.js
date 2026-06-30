const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/users",(req,res)=>{
    res.json({message:"Request from get method"});
});

app.post("/users",(req,res)=>{
    res.json({
        message: "User Created",
        data: req.body,
    });
});

app.post("/add",(req,res)=>{
    const {a,b}=req.body;
    const sum = a+b;
    res.json({
        message:"success",
        data:sum,
    });
});

app.listen(port);