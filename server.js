const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/resource/page1.html');
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/resource/login/login.html');
})



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/resource/index.html');
// })

app.get('/aof', (req, res) => {
    res.sendFile(__dirname + '/resource/aof.html');
})
app.get('/page1', (req, res) => {
        res.sendFile(__dirname + '/resource/page1.html');
    })

    
app.use(bodyParser.json());

//use for loading static page to support css 
app.use(express.static(__dirname));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server start on port ${port}`));