const {app, BrowserWindow }= require('electron');
const Eejs = require('electron-ejs');
var data={nombre:'gerald'};
let ejs=  new Eejs(data,{});



var  win ;




app.on('ready', ()=>{
    win =new BrowserWindow ({width:800,height:600 });
    //win.show(); 
    //win.preload(string); 
    win.loadFile(__dirname+ "/../views/index.ejs");
});





