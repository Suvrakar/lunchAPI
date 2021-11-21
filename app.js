const express = require("express")
const fs = require("fs");

const { Lunch } = require("./Models/lunchSchema")

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/HivecoreLunch");

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Yes");
});

app.get("/lunch", async (req, res) => {

    let lunchData = await Lunch.find()
        .sort({ name: 1 });
    res.send(lunchData);
});

app.put("/lunch/:id", async (req, res) => {
    try {
        let check= await Lunch.updateOne({
            // _id:mongoose.Types.ObjectId(req.params.id)
            employeeId:req.params.id
          },{
            $set:req.body
        });
        if(check.modifiedCount!==0){
            res.send("updated");
        }
    } catch (error) {
        console.log(error);
    }
   

});

app.post("/lunch", async (req, res) => {
    try {
        let lunchData = await new Lunch(req.body);
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