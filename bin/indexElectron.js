const {app, BrowserWindow }= require('electron');
const Eejs = require('electron-ejs');
// the text jump in here  won't be in  window  
var data={nombre:'space miku',
          dialogo:["humano tas cag!#%& para estar mirando esto ","anda has tu tarea" ," que haces viendo esto  " ],             
};
let ejs=  new Eejs(data,{});



var  win ;




app.on('ready', ()=>{
    win =new BrowserWindow ({width:800,height:600 });
    //win.show(); 
    //win.preload(string); 
    win.loadFile(__dirname+ "/../views/menu.ejs");
});




/*
const dialogo = class{
    constructor ( n,d ){
        this.nombre=n;
        this.dialogo=d;
    }
    greet() {
        return 'says hello.';
    }
}
var d = new dialogo("nombre","dialgo"); 
console.log(d.nombre );*/