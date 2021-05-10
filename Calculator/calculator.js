const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result is " + result);

})

app.get("/bmicalculator", function(req, req){
    res.sendFile(__dirname + "bmicalculator.html");
})

app.listen(107, function(){
    console.log("Server is running on port 107");
});
