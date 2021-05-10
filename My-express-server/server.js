const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1>Contact me at Jaf107</h1>");
});

app.get("/about", function(req, res){
    res.send("I am a Student, a Software Engineer and a Developer, ");
});

app.get("/hobbies", function(req, res){
    res.send("Photography, Football");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});