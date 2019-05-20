const {app, BrowserWindow }= require('electron');
const Eejs = require('electron-ejs');
// the text jump in here  won't be in  window  
var data={nombre:'space miku',
          dialogo:["humano tas cag!#%& para estar mirando esto ","anda haz tu tarea" ," que haces viendo esto  " ],             
};
let ejs=  new Eejs(data,{});



var  win ;




app.on('ready', ()=>{
    win =new BrowserWindow ({width:800,height:600 });
    //win.show(); 
    //win.preload(string); 
    win.loadFile(__dirname+ "/../views/menu.ejs");
});



