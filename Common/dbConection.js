const mongoose = require("mongoose")

const connect = async() => {
    try {
        let res=await mongoose.connect("mongodb+srv://HivecoreLunch:hivecorelimited@cluster0.tz1pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, });
        console.log("Connected");
    } catch (error) {
        console.log("Not Connected ,", error);
    }

}

exports.connect = connect;