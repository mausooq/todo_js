
    getData();
    function getData(){
        fetch('http://localhost:2000/todos',{
            mathod:"GET",
        }).then((res)=>{
            res.json().then((data)=>{
                // console.log(data);
                let mainArea = document.getElementById('mainArea');
                //  mainArea.innerHTML=JSON.stringify(data)
                for (let i = 0; i < data.length; i++) {
                    let childArea =document.createElement('div');

                    let childCont1 = document.createElement('span');
                    childCont1.innerHTML=data[i].title;
                    
                    let childCont2 = document.createElement('span');
                    childCont2.innerHTML=data[i].description;

                    let delbtn = document.createElement('button');
                    delbtn.innerHTML='delete';
                    delbtn.setAttribute("onclick","deleteTodo("+data[i].id+")");

                    childArea.appendChild(childCont1);
                    childArea.appendChild(childCont2);
                    childArea.appendChild(delbtn);

                    mainArea.appendChild(childArea);
                }
            })
        })
    }

    function onePress () {
        var title =document.getElementById("title").value;
        var description =document.getElementById("disc").value;
      fetch("http://localhost:2000/todos",{
        method:"POSt",
        body:JSON.stringify({
            title,
            description,
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>{
        res.json().then((data)=>{
            // let mainArea = document.getElementById('mainArea');
            //     //  mainArea.innerHTML=JSON.stringify(data)
            //         let childArea =document.createElement('div');

            //         let childCont1 = document.createElement('span');
            //         childCont1.innerHTML=data.title;
                    
            //         let childCont2 = document.createElement('span');
            //         childCont2.innerHTML=data.description;

            //         let delbtn = document.createElement('button');
            //         delbtn.innerHTML='delete';
                   
            //         childArea.appendChild(childCont1);
            //         childArea.appendChild(childCont2);
            //         childArea.appendChild(delbtn);

            //         mainArea.appendChild(childArea);
            
        })
    })
    }

    function deleteTodo(id){
        // console.log(id)
        fetch("http://localhost:2000/todos/"+id,{
            method:"DELETE",
            headers:{
                "Content-Type":"appliction/json"
            }
        }).then(()=>{
         location.reload();
        })
    }
