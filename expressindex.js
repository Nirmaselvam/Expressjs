import express from "express";

const app =express();
const port =3000;
var name = "Sweety";

app.get("/",(req,res)=>{
console.log(`Congratulations ${name}.`)
res.send(name);

});
app.listen(port,()=>{
console.log(`I am listening on ${port}.`)
}
);