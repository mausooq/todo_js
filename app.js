const express = require('express');
const bodyParser = require('body-parser')

const app =express();
app.use(bodyParser.json());

let todos = [];

app.get('/todos',(req,res) => {
    res.json(todos)
})
app.get('/todos/:id')
app.post('/todos/:id')
app.put('/todos')
app.delete('/todos/:id')

app.listen(2000,(req,res) => {
    console.log(`server started on port  2000`)

});