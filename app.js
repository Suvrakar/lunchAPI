const express = require("express")
const {connect} = require("./Common/dbConection")
connect();
const router = require("./Router/Router")
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express'); 
const port = process.env.PORT || 3000;

const app = express()

app.use(express.json());
app.use("/lunch", router );

/** 
 * @swagger 
 * /: 
 *   get: 
 *     description: is working 
 *     responses:  
 *       200: 
 *         description: Success with yes  
 *   
 */  
app.get("/", (req, res) => {
    res.send(`up and runing on port ${port}`);
});

app.listen(port, () => {
    console.log("On");
});

const swaggerOptions = {  
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {  
            title:'Lunch API',  
            version:'1.0.0'  
        }  
    },  
    apis:['app.js','./Router/Router.js'],  
}  
const swaggerDocs = swaggerJSDoc(swaggerOptions);  
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs)); 
// app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs)); 

