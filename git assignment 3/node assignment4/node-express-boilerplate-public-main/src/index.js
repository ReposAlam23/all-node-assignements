const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello world!")
})

function CheckError(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return ({
            status: "Error",
            message: "Invalid data types"
        })
    }
    if (num1 === "" || num2 === "") {
        return ({
            status: "Error",
            message: "The number must be provided"
        })
    }
    if (num1 > 1000000 || num2 > 1000000) {
        return ({
            status: "Error",
            message: "OverFlow"
        })
    }
    if (num1 < -1000000 || num2 < -1000000) {
        return ({
            status: "Error",
            message: "UnderFlow"
        })
    }
    return 1;
}

//===========================  ADDITION  ==============

app.post("/add", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let error = CheckError(num1, num2)
    if (!(error == 1)) {
        return res.status(400).json(error)
    }

    let sum = 0;
    res.json({
        status: "success",
        message: "the sum of the given two numbers",
        sum: num1 + num2
    })
})

// ====================   SUBSTRACTION  =============

app.post("/substract", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let error = CheckError(num1, num2)
    if (!(error == 1)) {
        return res.status(400).json(error)
    }

    let difference = 0;
    res.json({
        status: "success",
        message: "the difference of the given two numbers",
        difference: num1 - num2
    })
})

//================= MULTIPLICATION  ===================


app.post("/Multiplication", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let error = CheckError(num1, num2)
    if (!(error == 1)) {
        return res.status(400).json(error)
    }

    let multiply = 0;
    res.json({
        status: "success",
        message: "the multiplication of the given two numbers",
        multiply: num1 * num2
    })
})

//===================  DEVIDE  ===================

app.post("/devision", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let error = CheckError(num1, num2)
    if (!(error == 1)) {
        return res.status(400).json(error)
    }
    if (num2 === 0) {
        return res.status(400).json({
            status: "Error",
            message: "Cannot divide by zero"
        })
    }

    let devide = 0;
    res.json({
        status: "success",
        message: "the devision of the given numbers",
        devide: num1 * num2
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;