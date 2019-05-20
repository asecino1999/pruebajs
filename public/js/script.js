//var dialogo=['<%=dialogo[0]%>','<%=dialogo[1]%>'];  
const app=new Vue({
    el:'#app',
    data:{
        numero:0,
        
        dialogo1:dialogos,
        
    },
    methods:{
        siguiente:()=>{
            console.log(" click"+ app.numero);
            app.numero=app.numero+1;
            app.numero=(app.numero >=app.dialogo1.length  )? app.numero-1:app.numero; 
        }
    }
}); 