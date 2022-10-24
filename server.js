const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json())

const sayHello = (req, res) => {
    res.send("Hello")
}

const addNumbers = (req, res) => {
    console.log("here")
    const {a,b} = req.body;
    res.send(`The sum of numbers is ${a+b}`)
}

app.get("/", sayHello);

app.post("/add", addNumbers)

app.listen(5000, ()=>{
    console.log("Hello world")
})
