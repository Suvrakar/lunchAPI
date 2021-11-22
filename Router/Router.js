const express = require("express")
const { Lunch } = require("../Models/lunchSchema")

const router = express.Router();

/** 
 * @swagger 
 * /lunch: 
 *   get: 
 *     description: Get all Employee Lunch data
 *     responses:  
 *       200: 
 *         description: Success  
 *   post: 
 *     summary: Create an new Employee lunch
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeId:
 *                 type: number
 *                 required: true
 *               name:
 *                 type: string
 *                 required: true
 *               lunch:
 *                 type: boolean
 *                 required: true       
 *               date:
 *                 type: string
 *     responses:  
 *       201: 
 *         description: Created  
 */  

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
    .put("/lunch/:id", async (req, res) => {
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