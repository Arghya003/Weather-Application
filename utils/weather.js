const { json } = require("express");
const request= require("request");
const constants= require("../utils/config");

const weatherData= (address,callback)=>{
    
    const url= constants.openWeathermap.BASE_URL+encodeURIComponent(address)+'&appid='+constants.openWeathermap;
    console.log(url);
   request({url,json:true},(error,{body})=>{
    console.log(body)
    if(error){
callback("cant fetch data from the api",undefined)
    }
    else{
        callback(undefined,{abc:true})
    }
   })
}


module.exports=weatherData;