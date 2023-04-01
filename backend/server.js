const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(
    cors({
    origin: "http://localhost:3000" 
    })
);
mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB");
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    movie:String,
    tickets:Array,
    total:String,
})

const User = mongoose.model("User",UserSchema)

app.get("/info",(req,res)=>{
    let qmail = req.query.email;
    User.find({email:qmail}).then((result)=>{
        res.send(result);
    }).catch()
});

app.get("/",async(req,res)=>{
    await User.find().then((result)=>{
        res.send(result);
    }).catch()
});
// app.get("/book",(req,res)=>{
//     let qname = req.query.email;
//     let movie = req.query.movie;
//     User.findOneAndUpdate({email:qname},{movie:movie}).then((result)=>{
//         res.send(result)
//     }).catch();
// })

app.post("/login",async (req, res)=> {
    const { email, password} = req.body
    const data = await User.findOne({ email: email , password:password})
    if(data == null){
        res.send('NA')
        console.log('NA')    
    }else{
        res.send('login')
        console.log(data)
    }
}) 

// if(user){
//     if(password === user.password ) {
//         res.send({message: "Login Successfull", user: user})
//     } else {
//         res.send({ message: "Password didn't match"})
//     }
// } else {
//     res.send({message: "User not registered"})
// }

app.post("/register",async (req, res)=> {
    const { name, email, password} = req.body
    const data = await User.findOne({email: email})
    if(data != null){
        res.send({message: "User already registerd"})
    } else {
        const user = new User({
            name,
            email,
            password
        })
        user.save()
    }
})

app.post("/book",(req,res)=>{
    const {email,tickets,totalamt,movie} = req.body
    console.log(email)
    User.findOneAndUpdate({email:email},{movie:movie,tickets:tickets,total:totalamt,movie:movie}).then((result)=>{
        console.log(result)
    })
})

app.post("/info",(req,res)=>{
    const {email} = req.body;
    //console.log(email,req.body);
    User.find({email:email}).then((result)=>{
        res.send(result);
    }).catch()
});

app.listen(3001,()=>{
    console.log("server is up and running");
});