const mongoose = require("mongoose")

const connect = () => {
    mongoose.connect("mongodb://localhost:27017/HivecoreLunch", { useNewUrlParser: true, useUnifiedTopology: true, });
}

exports.connect=connect;