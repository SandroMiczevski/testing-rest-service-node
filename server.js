const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json())

// Methods and functions that can be called
const sayHello = (req, res) => {
    //path.join is used to concatenate all the string and provide the full path where the "index.html" file is.
    res.sendFile(path.join(__dirname, "index.html"))
}

const addNumbers = (req, res) => {

    const {a,b} = req.body;
    res.send({
        result: parseInt(a) + parseInt(b),
    })
}

//Paths where users can send requests 
app.get("/", sayHello);

app.post("/add", addNumbers)

// Server open and listening to the port 5000
app.listen(5000, ()=>{
    console.log("server running....")
})
