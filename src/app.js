const express = require("express");
const hbs= require("hbs");
const path= require("path");

const weatherData= require("../utils/weather")

const app = express();

const PORT= process.env.PORT||3000;



const dirpath=path.join(__dirname,"../public");

const viewPath=path.join(__dirname,"../templates/views");
const partialPath= path.join(__dirname,"../templates/partials")

app.set("viewengine","hbs");
app.set("views",viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(dirpath));


app.get("/",(req,res)=>{
    res.send("Hello this is a weather app")
})


app.get('/weather',(req,res)=>{

    const address= req.query.address;
    weatherData(address,(result)=>{
        console.log(result);
    })
});

app.get("*",(req,res)=>{
    res.send("page not found")
});









 app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
 })