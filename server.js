const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/resource/index.html');
})

//bodyparser middleware
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`server start on port ${port}`));