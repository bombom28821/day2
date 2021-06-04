const express = require('express')
const bodyparser = require('body-parser');
const fs = require('fs')

const app = express()
app.use(bodyparser.urlencoded({extended:false}));
var fileName = 'log.txt';
app.use((req, res, next)=>{
    var d = new Date();
    var content = req.originalUrl + ":" + d.toDateString() + d.getHours() + ":" + d.getMinutes()+":" + d.getSeconds()
    console.log('ban da truy cap: ' + req.originalUrl);
    console.log('Thoi gian truy cap: '+ d.toDateString() + ":" + d.getHours() + ":" + d.getMinutes()+":" + d.getSeconds());
    fs.appendFileSync(fileName, content + "\n");
    next();
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/about', (req,res)=>{
    res.sendFile(__dirname + '/public/about.html');
})

app.post('/sendUs', (req,res)=>{
    var name = req.body.txtName;
    var email = req.body.txtEmail;
    var country = req.body.country;
    res.end('xin chao ' + name + ": "+ email + ": " + country);
})

const PORT = 5000;
app.listen(process.env.PORT || PORT);
console.log('Sever is running')