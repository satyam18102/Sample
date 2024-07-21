const express=require("express");
const app=express();
const path=require("path");
let port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(port,()=>{
    console.log(`Server is Listning to Port:${port}`);
})

app.get("/",(req,res)=>{
    res.render("registration.ejs")
})
app.get("/Register",(req,res)=>{
    res.render("registration.ejs");
})
app.get("/team-details",(req,res)=>{
    res.render("team-details.ejs")
})
app.get("/yukti-details",(req,res)=>{
    res.render("yukti-details.ejs")
})