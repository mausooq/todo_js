const express = require('express');
const bodyParser = require('body-parser')

const app =express();
app.use(bodyParser.json());

let todos = [];

function findIndex(arr,index){
    for(i=0;i<arr.length;i++){
        if(arr[i].id === index){
            return i;
        }
        return -1;
    }
}
app.get('/todos',(req,res) => {
   res.json(todos);
})
app.get('/todos/:id',(req,res) => {
   const todoIndex = findIndex(todos , parseInt(req.params.id));
    if(todoIndex == -1)
        res.status(404).send("NOT FOUND");
    else{
        res.json(todos[todoIndex]);
    }
})
app.post('/todos/:id',(req,res) => {
    const {itle,description}=req.body;
})
app.put('/todos',(req,res) => {
    console.log(`todo update`)
})
app.delete('/todos/:id',(req,res) => {
    console.log(`todo delete id: ${req.params.id}`)
})

app.listen(2000,(req,res) => {
    console.log(`server started on port  2000`)

});