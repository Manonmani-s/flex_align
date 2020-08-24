const express = require("express");
const server = express();
const port = 4300;

server.use(express.static("/home/dci/Documents/align-items/public"));
server.listen(port, function () {
  console.log(`server is listening to port ${port}`);
});
