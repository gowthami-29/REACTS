import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

function TodoDetails(){
    const {id}=useParams();
    const [todo,setTodo]=useState(null);
    useEffect(()=>{
        getTodoById(id).then(data=>setTodo)
    },[id])
    if (!todo) return <h3>lading...</h3>
    return(
        <div>
            <h2>todo details</h2>
            <p><b>id:</b>{todo.id}</p>
            <p><b>Title:</b>{todo.title}</p>
            <p><b>status:</b>{todo.completed?"completed":"pending"}</p>
        </div>
    )
}
export default TodoDetails;