//sample
//Require express
const express = require ("express");

//app object
const app = express();

//main page
app.get("/", function(req,res) {
	res.send ("Welcome to my first Node.js web site.");
});

//contact page
app.get("/contact", function(req,res) {
	res.send ("My name is ..., and ");
});

//if runs on Heroku assign a dynamic port number
let port = process.env.PORT;

//if runs locally assign 8002 static PORT
if (port == null || port == "") {
	port = 8002;
}

app.listen(port);
