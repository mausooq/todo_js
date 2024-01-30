const express =require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app =express();
app.use(bodyParser.json());

app.get('todos',(req,res) => {
    fs.readFile("todos.json","utf-8",(err,data) => {
        if(err) throw err;
        res.json(JSON.parse(date))
    })
})
app.listen(2000,()=> {
    console.log("app2.js  Server is running on port 2000");
});