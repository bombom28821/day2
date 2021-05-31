const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/about', (req,res)=>{
    res.sendFile(__dirname + '/public/about.html');
})

const PORT = 5000;
app.listen(process.PORT || PORT);
console.log('Sever is running')