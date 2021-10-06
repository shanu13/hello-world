const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('<h1>Hello World in Nodejs</h1>')
})

app.listen(8080,(err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started on port 8080')
})