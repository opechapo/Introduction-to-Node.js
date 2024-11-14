// 
const { log } = require('console');
const http = require('http');

const port = 2000

// Create a server object:

http.createServer(function(req, res) {
  // res.write('My boss'); //write a response to client 
  res.writeHead(200, {"Content-type": "text/html"});
  let url = req.url
  if (url === "/home"){
    res.write("<h1>Hello Hommie<h1/>")
    res.end(); //end the response
    
  }else if (url === "/about"){
    res.write("<h2>About page<h2/>")
    res.end(); //end the response 
  }
}).listen(port) //The server object listens to port 2000
console.log(`server is running on ${port}`);
