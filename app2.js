const express =require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app =express();
app.use(bodyParser.json());

function findIndex(arr,id){
    for (let i=0;i<arr.length;i++){
        if(arr[i].id === id)
             return i;
        else return -1;
    }

}
app.get('/todos',(req,res) => {
    fs.readFile("todos.json","utf-8",(err,data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

app.post('/todos',(req,res) => {
        const newTodo={
            id:Math.floor(Math.random() * 10000000),
            title:req.body.title,
            description:req.body.description
        };
      fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err) throw err
        const todos =JSON.parse(data)
        todos.push(newTodo)
        fs.writeFile('todos.json', JSON.stringify(todos), 'utf-8', (err) => {
            if (err) throw err
            res.status(201).json(newTodo); 
        });
      })
 
})
app.get('/todos/:id',(req,res)=> {
    fs.readFile("todos.json","utf-8",(err,data)=> {
        todoData = JSON.parse(data);
        const todoIndex = findIndex(todoData,parseInt(req.params.id));
        if(todoIndex===-1){
            res.status(404)
        }
        else{
            res.json(todoData[todoIndex]);
        }
    })
   
})
app.listen(2000,()=> {
    console.log("app2.js  Server is running on port 2000");
});