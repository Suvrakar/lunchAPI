const express = require("express")
const { Lunch } = require("../Models/lunchSchema")

const router = express.Router();
const mongoose = require("mongoose")


router
    .route("/")
    .get(async (req, res) => {
        try {
            let lunchData = await Lunch.find()
                .sort({ name: 1 });
            res.send(lunchData);
        }
        catch(e) {
            console.log("Errors",e);
        }
    })
    .post(async (req, res) => {
        try {
            let lunchData = await new Lunch(req.body);
            await lunchData.save()
            res.send(lunchData);
        } catch (error) {
            console.log(error);
            res.send(error.message);

        }
    });

router
    .put("/:id", async (req, res) => {
        try {
            let check = await Lunch.updateOne({
                _id: mongoose.Types.ObjectId(req.params.id)
            }, {
                $set: req.body
            });
            if (check.modifiedCount !== 0) {
                res.send("updated");
            }
        } catch (error) {
            console.log(error);
        }

    });


module.exports = router;