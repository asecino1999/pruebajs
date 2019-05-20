


/*
objetivo de sintaxis 
var storyTeler = char ("",""); // char debe retornar una funcion 
var char1 =  char ("nombre1", "folder")


*/


function char(nombre,folder){

    var findSeparator=(nombre)=>{
        var sep="-";
        var str=sep;
        
        while (nombre.includes(str)) {
            str=str+sep;
        }
        return str; 
    }


    var character;
    character=function (estado){
        //console.log(typeof estado!=='undefined')

        character.separador=findSeparator(nombre)
        character.estado=(typeof estado=='undefined' )? "":character.separador+estado; 
         
        //console.log("estado"+character.estado);
        character.cont+=1;
        return character.nombre+character.estado+character.separador+character.cont;
    }
    //console.log(nombre)
    character.nombre=nombre;
    
    character.folder=folder;
    character.cont=-1;
    
    //console.log(character);

    return character;
}


//ejemplo de uso 
var char1=new  char("space-miku","../img/",":");
var char2=new  char("dark miku","../img/");



var start ={
    [char1("sad")]:"dialogo1",
    [char2("sad")]:"dialogo2",
};

for (const key in start) {
    console.log(key.split());
}
