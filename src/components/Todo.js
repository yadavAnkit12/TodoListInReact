import { useState } from "react"
import '../App.css'

function Todo(){
    const [todo,setTodo]=useState("")
    const [todolist,settodolist]=useState([])
    const  addTodo=()=>{
     let newArr=[...todolist]
     let newitem={
        id:Math.random(),
        value:todo
     }
     newArr.push(newitem)
    settodolist(newArr)
    setTodo("")
   }
const deletetodo=(myid)=>{
settodolist(todolist.filter(item=>item.id!==myid))
}

    return <div>
    <img src="https://raw.githubusercontent.com/anandstephan/TodoListInReact/main/src/todolist.png" height={200} width={200} className="logo"></img>
    <h1 className="app-title"><u>Todo List</u></h1>

    <div className="container">
        Add Item...
        <br></br>
     <input type="text" className="input-text" placeholder="Enter here" onChange={e=>setTodo(e.target.value)} value={todo}></input>
    <button type="button" className="add-btn" onClick={addTodo} >Add</button>
    <br></br>
    <div className="list">
        <ul>
    {
    todolist.map((elem,index)=> {
        return <>
        <li key={index} >{elem.value}<button  onClick={()=>deletetodo(elem.id)}>Delete</button></li>
        
        </>
    })
    }
    </ul>
    </div>
    
    </div>
    </div>
}

export default Todo