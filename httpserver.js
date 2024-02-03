const http = require("http");

const port = process.env.port || 3000; //setup port environment

const server = http.createServer((req, res) => {
  res.statusCode = 200; // statuscode return status of the server
  res.setHeader("Content-type", "text/html"); //setHeader what type of content is required and in which format
  res.end(<h1>This is an home page</h1>); //end is responding the data to the user
});

server.listen(port, () => {
  console.log(`server is listening in the port ${port}`);
});
