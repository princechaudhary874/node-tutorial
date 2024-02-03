const http = require("http");
const fs = require("fs");
const port = process.env.port || 3000; //setup port environment

const server = http.createServer((req, res) => {
  res.statusCode = 200; // statuscode return status of the server
  res.setHeader("Content-type", "text/html"); //setHeader what type of content is required and in which format
  if (req.url == "/") {
    const data = fs.readFileSync("index.html");
    res.end(data.toString()); //end is responding the data to the user
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is an about page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(port, () => {
  console.log(`server is listening in the port ${port}`);
});
