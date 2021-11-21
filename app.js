const express = require("express")
const fs = require("fs");

const {Lunch} = require("./Models/lunchSchema")

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/HivecoreLunch");

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Yes");
});

app.get("/lunch", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        console.log(data);
        const employees = JSON.parse(data);
        res.send(employees.employees);
    })
});

app.post("/lunch", async (req, res) => {
    try {
        let lunchData=await new Lunch(req.body);
        await lunchData.save()
        res.send(lunchData);
    } catch (error) {
        console.log(error);
    }
   
    // fs.readFile("./db.json", "utf-8", (err, data) => {
    //     const employees = JSON.parse(data);
    //     employees.employees.push(employee);
    //     console.log(employee);
    //     fs.writeFile("./db.json", JSON.stringify(employees), (err) => {
    //         res.send(employee);
    //     })

    // })
    // res.send("Send")  
});

app.listen(3000, () => {
    console.log("On");
});