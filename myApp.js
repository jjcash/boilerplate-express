require('dotenv').config();
let express = require('express');
let app = express();
const mySecret = process.env['MESSAGE_STYLE'];

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));
var response = "hello json";
if(mySecret === "uppercase"){
  app.get("/json", (req, res) => {
    res.json({response}.toUpperCase());
});
}else{
  app.get("/json", (req, res) => {
    res.json({response});
});
};





































 module.exports = app;
