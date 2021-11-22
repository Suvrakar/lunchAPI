const { Schema, model } = require("mongoose");


const Employee = model('Employee', Schema({
    employeeId: { type: Number, required: true },
    name: { type: String, required: true },
    isDisabled: { type: Boolean, required: true, default: false },
    password:{type: String, required: true},
    date: Date.now()
}));

exports.Employee = Employee;