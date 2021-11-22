const express = require("express")
const {connect} = require("./Common/dbConection")
const cors = require("cors");
connect();
const router = require("./Router/Router")
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
// const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express'); 
const port = process.env.PORT || 3000;

const app = express()

app.use(express.json());
app.use(cors());
app.use("/lunch", router );


app.get("/", (req, res) => {
    res.send(`up and runing on port ${port}`);
});

app.listen(port, () => {
    console.log("On");
});

// const swaggerOptions = {  
//     swaggerDefinition: {
//         openapi: '3.0.0',
//         info: {  
//             title:'Lunch API',  
//             version:'1.0.0'  
//         }  
//     },  
//     apis:['app.js','./Router/Router.js'],  
// }  
// const swaggerDocs = swaggerJSDoc(swaggerOptions);  
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument)); 
// app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs)); 

