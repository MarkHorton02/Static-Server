const express = require("express");
// Note ES5 syntax is required. Can't use import yet
const app = express();
// Just convention to remap express to be called app

app.use("/", express.static("website1"));
app.use("/website2", express.static("website2"));
// First parameter is the URL ending (technically optional), second is the file name

app.listen(5001, () => {console.log("Listening on port 5001")});
// First parameter is the port to listen on, second is a function to execute on server start