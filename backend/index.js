const http=require('http');
const PORT = 4004;
const apidata = require('./apiCalling')

const server =http.createServer((req,res)=>{
   // res.setHeader('Content-Type','application/json');
   // res.end("<h2 style =color:red>Welcome to node server</h2>");
   if(req.url="/msg" && req.method=="POST"){
    res.setHeader("Content-Type","text/html");
    res.end("<h2>Greeting of the da</h2>") 
  }
  else if(req.url=="/data" && req.method=='POST'){
    res.setHeader('Content-Type','application/json');
    const jsondata={
        name:"rahul",
        branch:"CS",
        college:"abes"
    }
    res.end(JSON.stringify({msg:jsondata}))
  }
   else if(req.url=="/data" && req.method=='GET'){
    res.setHeader('Content-Type','application/json');
     const jsondata = apidata(20,200);
    
    res.end(JSON.stringify({msg:jsondata}))
  }
  else{
        res.setHeader("Content-Type","text/html");
    res.end("<h2 style=color:red>invalid request</h2>") 

  }
})

server.listen(PORT,()=>{
    console.log("server is listening on"+PORT)
})