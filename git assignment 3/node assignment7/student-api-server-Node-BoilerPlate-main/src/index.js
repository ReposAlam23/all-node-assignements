const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
const studentArray = require("./InitialData")
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

//=================== GET METHOD =====================
app.get("/api/student", (req, res) => {
    res.json({ studentArray })
})
app.get("/api/student/:id", (req, res) => {
    let index = studentArray.findIndex(element => {
        return element.id == req.params.id
    })
    if (index >= 0) {
        let student = studentArray[index]
        res.send(student)
    } else res.status(404).send("404")
})

//================  POST METHOD  =======================

app.post("/api/student", (req, res) => {
    if (req.is('application/x-www-form-urlencoded')) {
        if (req.body.name != undefined && req.body.name != "" && req.body.currentClass != undefined && req.body.currentClass != "" && req.body.division != undefined && req.body.division != "") {
            studentArray.push({
                id: studentArray[studentArray.length-1].id+1,
                name: req.body.name,
                currentClass: req.body.currentClass,
                division: req.body.division
            })
            res.status(200).json({ "id": studentArray[studentArray.length-1].id })
        } else {
            res.status(400).send("400")
        }
    } else {
        res.status(400).json({
            status: "failed",
            message: "Invalid input type"
        })
    }
})

//======================= PUT METHOD ===========
app.put("/api/student/:id", (req, res) => {
    if (req.is('application/x-www-form-urlencoded')) {
        let index = studentArray.findIndex(element => {
            return element.id == req.params.id
        })
        // console.log(index)
        if (index >= 0) {
            if (req.body.name != undefined && req.body.name != "" && req.body.currentClass != undefined && req.body.currentClass != "" && req.body.division != undefined && req.body.division != "") {
                    studentArray[index].id = req.body.id,
                    studentArray[index].name = req.body.name,
                    studentArray[index].currentClass = req.body.currentClass,
                    studentArray[index].division = req.body.division,  

                    res.json({ "name" : req.body.name})                
            }else{
                res.status(400).send("400")
            }
        } else res.status(404).send("404")
    } else {
        res.status(400).json({
            status: "failed",
            message: "Invalid input type"
        })
    }
})

//=======================   DELETE METHOD  =============
app.delete("/api/student/:id", (req, res)=>{
    let index = studentArray.findIndex(element => {
        return element.id == req.params.id
    })
    if (index >= 0) {
        studentArray.splice(index, 1)
        res.send("")
    } else res.status(404).send("404")
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   
