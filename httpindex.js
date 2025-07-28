import express from "express"

const app = express();
const port  =3000;

app.listen(port,()=>{
    console.log (`I am listening on ${port}.`);
})
app.get("/",(req,res)=>{
    res.send("Hi this is get method landing page");

}
);
app.get("/contac",(req,res)=>{
    res.send("Hi this is get method for contact");

}
);