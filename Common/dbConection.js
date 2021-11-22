const mongoose = require("mongoose")

const connect = async() => {
    try {
        let res=await mongoose.connect("mongodb://localhost:27017/HivecoreLunch", { useNewUrlParser: true, useUnifiedTopology: true, });
        console.log("Connected");
    } catch (error) {
        console.log("Not Connected ,", error);
    }

}

exports.connect = connect;