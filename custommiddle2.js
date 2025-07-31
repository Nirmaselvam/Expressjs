import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true})); 

function logger(req,res,next){
   console.log("Req method: " , req.method);
  console.log("Req URL: " , req.url);
  next();
};

app.use(logger);

/*
app.use((req,res,next)=>{
  console.log(req.method);
  console.log(req.url);
  next();
});
*/

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
