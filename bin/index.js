const express = require("express");
const ejs = require('ejs');
var app=express();

var port = 443||process.env.port;
app.set('view engine',ejs)


app.get("/", (req,res )=>{
    res.render("../views/index.ejs",{}); 
});


app.listen(port , ()=>{
    console.log(" escuchando en : http://localhost:"+port);
});
