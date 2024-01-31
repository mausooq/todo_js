const express = require('express');
const bodyParser = require('body-parser')
const path =require('path')
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
app.post('/todos',(req,res) => {
    const {title,description}=req.body;
    const id = Math.floor(Math.random() * 1000000000);
    const newTodo = {id,title,description}
    todos.push(newTodo);
    res.status(201).send(newTodo);
})
app.put('/todos/:id',(req,res) => {
   const todoIndex = findIndex(todos,parseInt(req.params.id))
   if(todoIndex == -1){
    res.status(404).send("ID NOT FOUND");
   }
   else{
    const {title,description} = req.body;
    todos[todoIndex].title = title;
    todos[todoIndex].description= description;
    res.status(200).json(todos[todoIndex]);
   }
})
app.delete('/todos/:id',(req,res) => {
   const  todoIndex = findIndex(todos,parseInt(req.params.id))
   if (todoIndex==-1){
    res.status(404).send('ID NOT Found')
   }
   else{
    todos.splice(todoIndex,1);
    res.status(200).send('Deleted Successfully');
   }
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})
app.listen(2000,(req,res) => {
    console.log(`server started on port  2000`)

});