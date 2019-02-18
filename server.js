const express= require("express");
const app=express();
app.get("/",function(req,res){
res.write("Ciao");
res.end();
});
app.listen(3000);
