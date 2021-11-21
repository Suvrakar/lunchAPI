const { Schema, model } = require("mongoose");


const Lunch = model('Employee', Schema({
    employeeId: { type: Number, required: true },
    name: { type: String, required: true },
    lunch: { type: Boolean, required: true },
    date:{type:Date,default:Date.now()}
}));

exports.Lunch = Lunch; 